import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import HangManIntros from "../Assets/HangManIntros.jpg";

import "./hangMan.css";
export function HangManIntro() {
  return (
    <div className="Main">
      <Image src={HangManIntros} width={"350px"} alt="brain" />

      <h1>Hang Man</h1>
      <div className="paraDiv">
        <p>
          "Hangman is a popular word guessing game where the player attempts to
          build a missing word by guessing one letter at a time. After a certain
          number of incorrect guesses, the game ends and the player loses. The
          game also ends if the player correctly identifies all the letters of
          the missing word."
        </p>
      </div>
      <Link to="/hangmangame" className="Button">
        Hang Man Game
      </Link>
    </div>
  );
}
