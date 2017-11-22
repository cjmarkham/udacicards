import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from './button';
import { connect } from 'react-redux';
import { addCard } from '../actions/card';
import { getDeck } from '../actions/deck';
import Input from './input';
import { globalStyles } from '../helpers/styles';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    const { question, answer } = this.state;
    const { deck } = this.props;

    this.props.addCard(deck, { question, answer })
      .then(() => {
        this.props.getDeck(deck.title).then(() => { // reload the deck (hack?)
          this.props.navigation.navigate('deck', { title: deck.title });
        });
      });
  }

  render () {
    return (
      <View style={globalStyles.container}>
        <Text>Question</Text>
        <Input.Text
          value={this.state.question}
          onChangeText={question => this.setState({ question })} />
        <Text>Answer</Text>
        <Input.Text
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })} />
        <Button type='primary' onPress={this.submit}>
          Submit
        </Button>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  deck: decks.deck,
});

export default connect(mapStateToProps, { addCard, getDeck })(AddCard);
