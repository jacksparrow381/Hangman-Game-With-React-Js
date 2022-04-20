import axios from "axios";

export function HangmanService() {
  return axios
    .get(`https://random-words-api.vercel.app/word`)
    .then((response) => {
      return response.data;
    });
}
