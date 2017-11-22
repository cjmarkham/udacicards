import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
  Deck,
  AddCard,
  Quiz,
} from '../pages';

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

export default DeckTabs;
