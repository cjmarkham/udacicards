import React from 'react';
import {
  AsyncStorage,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Decks,
  Deck,
  AddDeck,
  AddCard,
  Quiz,
} from './pages';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Constants } from 'expo';
import MainStack from './routing/main';
import { Brand } from './utils/colors';
import { scheduleNotification } from './helpers/notifications';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
);

class App extends React.Component {
  componentDidMount () {
    scheduleNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: Brand, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={Brand} {...this.props} />
          </View>
          <MainStack />
          <TouchableOpacity style={{padding: 10}} onPress={() => AsyncStorage.clear()}>
            <Text style={{textAlign: 'center'}}>Clear storage</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

export default App;
