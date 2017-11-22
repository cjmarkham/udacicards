import {
  AsyncStorage,
} from 'react-native';
import { ADD_CARD } from './types';

const DECKS_KEY = 'udaciCards:decks';

export const addCard = (deck, { question, answer }) => dispatch => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      const oldDeck = decks[deck.title];
      const newDeck = oldDeck;

      newDeck.questions = newDeck.questions.concat([{ question, answer }]);

      decks[deck.title] = newDeck;

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    });
}
