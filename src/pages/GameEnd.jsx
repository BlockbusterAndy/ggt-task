import { useContext, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../contexts/gameContext";
import GameOver from "../components/custom/GameOver";
import GameWon from "../components/custom/GameWon";
import Button from "../components/shared/Button";

const GameEnd = () => {
    const Config = useContext(GameContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(Config);
    });

    const handleRestart = () => {
        Config.setGameConfig((prev) => ({
            ...prev, 
            score: 0,
            count: 0,
            isCorrect: false,
            isIncorrect: false,
            isGameOver: false,
            isWon: false,
        }));
        navigate("/game");
    };

    const handleHome = () => {
        handleRestart();
        navigate("/");
    }

    const handlePlayAgain = () => {
        handleRestart();
        navigate("/game");
    }

    return (
        <motion.section
            className="flex flex-col items-center h-screen pt-25"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
        >
            <h1 className="text-2xl md:text-6xl text-white text-center font-coiny">Mystery Blocks</h1>
            {Config.gameConfig.isGameOver && <GameOver />}
            {Config.gameConfig.isWon && <GameWon />}
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-2 z-30">
                    <Button text="Home" className="block mt-4 bg-gray-500 text-white font-semibold z-10 text-xl" onClick={() =>handleHome()} />
                    <Button text="Play Again" className="block mt-4 bg-[#FF1C1C] text-white font-semibold z-10 text-xl" onClick={() =>handlePlayAgain()} />
                </div>
                <div className="absolute bottom-36 flex justify-between md:justify-around items-center w-full px-2 md:px-24 z-20">
                    <img src="/images/rocket.png" alt="rocket" className="h-[150px] md:h-[220px]"/>
                    <img src="/images/rocket.png" alt="rocket" className="h-[150px] md:h-[220px]"/>
                </div>
            </div>

        </motion.section>
    );
};

export default GameEnd;