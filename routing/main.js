import { StackNavigator } from 'react-navigation';
import HomeTabs from './home';
import DeckTabs from './deck';
import { Brand } from '../utils/colors';

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


export default Stack;
