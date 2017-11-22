import {
  GOT_DECKS,
  GOT_DECK,
} from '../actions/types';

const decks = (state = {}, action) => {
  switch (action.type) {
    case GOT_DECKS:
      return {
        ...state,
        decks: action.decks,
      }
    case GOT_DECK:
      return {
        ...state,
        deck: action.deck,
      }
    default:
      return state;
  }
}

export default decks;
