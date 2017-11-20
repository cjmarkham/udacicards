import {
  AsyncStorage,
} from 'react-native';

const DECKS_KEY = 'udaciCards:decks';

export const ADD_CARD = 'ADD_CARD';

export const addCard = (deck, { question, answer }) => dispatch => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      const oldDeck = decks[deck.title];
      const newDeck = oldDeck;

      console.log('OLD DECKS', decks);

      newDeck.questions = newDeck.questions.concat([{ question, answer }]);

      decks[deck.title] = newDeck;

      console.log('NEW DECKS', decks);

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    });
}
