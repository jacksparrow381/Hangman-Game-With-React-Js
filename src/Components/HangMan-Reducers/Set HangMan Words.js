import { SET_HANGMAN_WORDS } from "../HangMan-Actions";

const initialState = {
  Word: [],
};

export const myHangManWord = (state = initialState, action) => {
  switch (action.type) {
    case SET_HANGMAN_WORDS:
      return {
        ...state,
        Word: action.payload,
      };
    default:
      return state;
  }
};
