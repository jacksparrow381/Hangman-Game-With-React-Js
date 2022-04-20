import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_HANGMAN_WORDS } from "./HangMan-Actions";
import { Alphabets } from "../Constant/Constant";
import { Button } from "primereact/button";
import "./hangMan.css";

export function HangManGame() {
  const [Word, updateWord] = useState("");
  const [correctWords, updateCorrectWords] = useState([]);
  const [wrongWords, updateWrongWords] = useState([]);
  const [Chances, updateChances] = useState(10);
  let WordsArray = [];
  const dispatch = useDispatch();

  // Dispatch action to get the words

  useEffect(() => {
    dispatch({ type: GET_HANGMAN_WORDS });
  }, []);

  // Get the words from the reducer

  const WordsList = useSelector((state) => state.myHangManWord.Word);

  // update the state with the words

  useEffect(() => {
    WordsList.map((word) => {
      updateWord(word.word);
    });
  }, [WordsList]);

  // Update the word with upper case letters

  WordsArray = Word.toUpperCase().split("");

  console.log("WordsArray:", WordsArray);

  // Remaining chances

  const remainingChances = () => {
    if (Chances > 0) {
      updateChances(Chances - 1);
    }
  };

  // function when user click on alphabet

  const handleButtonClick = (event) => {
    if (WordsArray.includes(event)) {
      updateCorrectWords([...correctWords, event]);
    } else {
      updateWrongWords([...wrongWords, event]);
      remainingChances();
    }
  };

  // function on reset button

  const handleReset = () => {
    updateCorrectWords([]);
    updateWrongWords([]);
    updateChances(10);
    dispatch({ type: GET_HANGMAN_WORDS });
  };

  console.log("correctWords:", correctWords);

  // Check if game is won

  const isGameWon = () => {
    let status = "win";
    Word.toUpperCase()
      .split("")
      .forEach((word) => {
        if (!correctWords.includes(word)) {
          status = "";
        }
      });
    return status;
  };

  return (
    <div className="HangMan-Main">
      <h3 className="Chance">{Chances} Remaining Chances</h3>
      <div className="HangMan-Main-Header">
        {WordsArray.map((word, index) => {
          return (
            <p key={index} className="Box">
              {correctWords.includes(word) ? word : ""}
            </p>
          );
        })}
      </div>
      <div className="AlphabetDiv">
        {Alphabets.map((alphabet, index) => {
          return (
            <Button
              disabled={
                correctWords.includes(alphabet) ||
                wrongWords.includes(alphabet) ||
                Chances === 0 ||
                isGameWon()
              }
              onClick={() => {
                handleButtonClick(alphabet);
              }}
              key={index}
            >
              {alphabet}
            </Button>
          );
        })}
      </div>
      <button className="resetButton" onClick={handleReset}>
        Reset
      </button>
      {Chances === 0 ? <h1>You Lose! The hidden word is "{Word}"</h1> : ""}
      {isGameWon() === "win" ? <h1>You Won!</h1> : ""}
    </div>
  );
}
