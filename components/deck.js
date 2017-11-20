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
      <View style={styles.container}>
        <View style={styles.deckContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ decks }) => ({
  deck: decks.deck,
});

const mapDispatchToProps = dispatch => ({
  getDeck: title => dispatch(getDeck(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
