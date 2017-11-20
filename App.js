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
import { Ionicons } from '@expo/vector-icons';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Constants } from 'expo';
import { Brand } from './utils/colors';

const HomeTabs = TabNavigator({
  decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  addDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-plus' size={30} color={tintColor} />
    },
  }
});

const DeckTabs = TabNavigator({
  deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  addCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add card',
      tabBarLabel: 'Add Card',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      tabBarLabel: 'Start Quiz',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
})

const Stack = StackNavigator({
  home: {
    screen: HomeTabs,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Brand,
      },
      title: 'Home',
    }
  },
  deck: {
    screen: DeckTabs,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Brand,
      },
    }
  },
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: Brand, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={Brand} {...this.props} />
          </View>
          <Stack />
          <TouchableOpacity style={{padding: 10}} onPress={() => AsyncStorage.clear()}>
            <Text style={{textAlign: 'center'}}>Clear storage</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

export default App;
