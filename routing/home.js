import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
  Decks,
  AddDeck,
} from '../pages';

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

export default HomeTabs;
