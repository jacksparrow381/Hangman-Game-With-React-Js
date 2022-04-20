import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { HangmanService } from "../Components/hangman.service";
import {
  SET_HANGMAN_WORDS,
  GET_HANGMAN_WORDS,
} from "../Components/HangMan-Actions";

function* fetchWords(action) {
  const user = yield call(HangmanService);
  yield put({ type: SET_HANGMAN_WORDS, payload: user });
}

export function* fetchWordsSaga() {
  yield takeEvery(GET_HANGMAN_WORDS, fetchWords);
}
