import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Button from './button';
import globalStyles from '../helpers/styles';
import { Brand } from '../utils/colors';
import { getDeck } from '../actions/deck';

class Quiz extends React.Component {
  state = {
    showAnswer: false,
    currentQuestion: 0,
    completed: false,
    correct: 0,
    incorrect: 0,
  }

  componentDidMount () {
    this.props.getDeck(this.props.navigation.state.params.title);
  }

  onCorrect = () => {
    this.setState(state => ({
      correct: state.correct += 1,
    }), this.gotoNext);
  }

  onIncorrect = () => {
    this.setState(state => ({
      incorrect: state.incorrect += 1,
    }), this.gotoNext);
  }

  gotoNext () {
    const { currentQuestion } = this.state;
    const { deck } = this.props;
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion > deck.questions.length - 1) {
      this.setState({ completed: true });
    } else {
      this.setState({ currentQuestion: nextQuestion, showAnswer: false });
    }
  }

  restart = () => {
    this.setState({
      currentQuestion: 0,
      completed: false,
      correct: 0,
      incorrect: 0,
    });
  }

  render () {
    const { deck } = this.props;

    if ( ! deck) {
      return <ActivityIndicator />;
    }

    const { currentQuestion, completed, showAnswer, correct, incorrect } = this.state;

    if (deck.questions.length === 0) {
      return <Text>This deck has no cards. Please add one first</Text>;
    }

    if (completed) {
      return (
        <View style={globalStyles.container}>
          <Text>
            You scored { correct } out of { deck.questions.length } ({ Math.round((correct / deck.questions.length) * 100) }%)
          </Text>
          <Button style={{marginVertical: 10}} type='primary' onPress={this.restart}>
            Start again
          </Button>
          <Button onPress={() => this.props.navigation.navigate('deck', { deck: deck })}>
            Back to deck
          </Button>
        </View>
      );
    }

    return (
      <View style={globalStyles.container}>
        <Text>{ currentQuestion + 1 } / { deck.questions.length }</Text>

        <View>
          {
            ! showAnswer
              ? <View>
                  <Text style={styles.question}>
                    { deck.questions[currentQuestion].question }
                  </Text>
                  <TouchableOpacity style={styles.toggleAnswer} onPress={() => this.setState({ showAnswer: true })}>
                    <Text style={{color: Brand}}>Show answer</Text>
                  </TouchableOpacity>
                </View>
              : <View>
                  <Text style={styles.question}>
                    { deck.questions[currentQuestion].answer }
                  </Text>
                  <TouchableOpacity style={styles.toggleAnswer} onPress={() => this.setState({ showAnswer: false })}>
                    <Text style={{color: Brand}}>Show question</Text>
                  </TouchableOpacity>
                </View>
          }

          <Button style={{marginVertical: 10}} type='primary' onPress={this.onCorrect}>
            Correct
          </Button>
          <Button onPress={this.onIncorrect}>
            Incorrect
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  toggleAnswer: {
    alignItems: 'center',
    marginVertical: 10,
  }
});

const mapStateToProps = ({ decks }) => ({
  deck: decks.deck,
});

const mapDispatchToProps = dispatch => ({
  getDeck: title => dispatch(getDeck(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
