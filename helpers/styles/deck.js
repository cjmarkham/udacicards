import { StyleSheet } from 'react-native';
import { TypeDefault } from '../../utils/colors';

export default StyleSheet.create({
  deck: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: TypeDefault,
  },
  deckName: {
    fontSize: 20,
  },
  deckCardCount: {
    fontSize: 14,
    textAlign: 'center',
  },
  deckContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


