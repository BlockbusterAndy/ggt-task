import { useEffect, useContext } from "react";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../contexts/gameContext";
import Question from "../components/custom/Question";
import Puzzle from "../components/custom/Puzzle";
import Correct from "../components/shared/Correct";
import InCorrect from "../components/shared/InCorrect";

const Game = () => {
  const navigate = useNavigate();
  const { gameConfig } = useContext(GameContext);

  useEffect(() => {
    if (gameConfig.isWon) {
      console.log("You won the game!");
      setTimeout(() => {
        navigate("/game-end");
      }, 1700);
    }
    if (gameConfig.isGameOver) {
      console.log("Game Over!");
      setTimeout(() => {
        navigate("/game-end");
      }, 1700);
    }
  }, [gameConfig.isWon, gameConfig.isGameOver, navigate]);

  return (
    <section>
      <AnimatePresence mode="wait">
        {gameConfig.isCorrect && <Correct key={gameConfig.score} />}
        {gameConfig.isIncorrect && <InCorrect key={gameConfig.score} />}
        {/* <InCorrect key={gameConfig.score} /> */}
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="text-2xl md:text-4xl text-white text-center font-coiny">
          Mystery Blocks
        </h1>
        <div className="flex flex-col justify-center items-center md:gap-10">
          <div className="pt-2">
            <Question />
          </div>
          <div className="pt-2">
            <Puzzle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
