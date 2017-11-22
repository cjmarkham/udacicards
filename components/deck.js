import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { getDeck } from '../actions/deck';
import { globalStyles, deckStyles } from '../helpers/styles';

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  componentDidMount () {
    this.props.getDeck(this.props.navigation.state.params.title);
  }

  render () {
    const { deck } = this.props;

    if ( ! deck) {
      return <ActivityIndicator />
    }

    return (
      <View style={globalStyles.container}>
        <View style={deckStyles.deckContainer}>
          <Text style={{fontSize: 20}}>
            { deck.title }
          </Text>
          <Text>
            { deck.questions.length } cards
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  deck: decks.deck,
});

export default connect(mapStateToProps, { getDeck })(Deck);
