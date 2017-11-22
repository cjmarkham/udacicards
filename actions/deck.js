import {
  AsyncStorage,
} from 'react-native';
import {
  ADD_DECK,
  GOT_DECK,
  GOT_DECKS,
} from './types';

const DECKS_KEY = 'udaciCards:decks';

export const gotDecks = decks => {
  return {
    type: GOT_DECKS,
    decks,
  }
}

export const gotDeck = deck => {
  return {
    type: GOT_DECK,
    deck,
  }
}

export const addDeck = data => dispatch => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      const deck = {
        [data.title]: data,
      }

      const updatedDecks = Object.assign({}, decks, deck);

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks))
        .then(dispatch(gotDecks(updatedDecks)))
        .catch(e => console.error(e));
    });
}

export const getDecks = () => dispatch => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => dispatch(gotDecks(decks)));
}

export const getDeck = title => dispatch => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => dispatch(gotDeck(decks[title])));
}
