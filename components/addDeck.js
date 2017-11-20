import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions/deck';
import Button from './button';
import Input from './input';
import globalStyles from '../helpers/styles';

class AddDeck extends React.Component {
  state = {
    title: '',
  }

  submit = () => {
    const deck = {
      title: this.state.title,
      questions: [],
    };

    this.props.addDeck(deck)
      .then(() => {
        this.props.navigation.navigate('deck', { title: this.state.title });
      });
  }

  render () {
    return (
      <View style={globalStyles.container}>
        <View>
          <Text>Deck title</Text>
          <Input.Text
            value={this.state.title}
            style={globalStyles.input}
            onChangeText={title => this.setState({ title })} />
        </View>
        <Button
          type='primary'
          onPress={this.submit}>
          Add deck
        </Button>
      </View>
    )
  }
}

const mapStateToProps = ({ deck }) => ({
  deck: deck,
});

const mapDispatchToProps = dispatch => ({
  addDeck: data => dispatch(addDeck(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
