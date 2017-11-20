import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../actions/deck';
import { NavigationActions } from 'react-navigation';

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
    console.log('ITEM=', item);
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('deck', {
          title: item.data.title,
        })}
        style={styles.deck}>
        <View>
          <Text style={styles.deckName}>
            { item.data.title }
          </Text>
          <Text style={styles.deckCardCount}>
            { item.data.questions.length } cards
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  normalizedDecks = decks => {
    let array = [];
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
      <View style={styles.container}>
        <FlatList
          renderItem={this.renderDeck}
          data={normalizedDecks} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  deck: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  deckName: {
    fontSize: 20,
  },
  deckCardCount: {
    fontSize: 14,
    textAlign: 'center',
  }
})

const mapStateToProps = ({ decks }) => ({
  decks: decks.decks,
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
