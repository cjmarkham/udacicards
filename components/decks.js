import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions/deck';
import { NavigationActions } from 'react-navigation';
import { globalStyles, deckStyles } from '../helpers/styles';

class Decks extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount () {
    this.props.getDecks().then(() => {
      this.setState({ loading: false });
    });
  }

  renderDeck = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('deck', {
          title: item.data.title,
        })}
        style={deckStyles.deck}>
        <View>
          <Text style={deckStyles.deckName}>
            { item.data.title }
          </Text>
          <Text style={deckStyles.deckCardCount}>
            { item.data.questions.length } cards
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  normalizedDecks = decks => {
    let array = [];

    if ( ! decks) {
      return array;
    }

    Object.keys(decks).map(deckKey => {
      array.push({key: deckKey, data: decks[deckKey]});
    });
    return array;
  }

  render () {
    if (this.state.loading) {
      return <ActivityIndicator />
    }

    const normalizedDecks = this.normalizedDecks(this.props.decks);
    if (normalizedDecks.length === 0) {
      return <Text>No decks to show</Text>;
    }

    return (
      <View style={globalStyles.container}>
        <FlatList
          renderItem={this.renderDeck}
          data={normalizedDecks} />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks,
});

export default connect(mapStateToProps, { getDecks })(Decks);
