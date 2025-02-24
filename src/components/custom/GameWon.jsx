import { motion } from "motion/react";
import { useContext } from "react"
import { GameContext } from "../../contexts/gameContext"

const GameWon = () => {
    const {gameConfig}= useContext(GameContext);
  return (
    <motion.div
        className='flex flex-col justify-center items-center z-10 py-8'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
    >
        <div className='flex flex-col font-coiny text-white text-center text-2xl gap-2'>
            <h1>Congratulations!</h1>
            <span>{gameConfig.score}/9 Score</span>
        </div>
        <div className="flex flex-col items-center gap-6 pt-4 px-18">
            <h2 className="font-kreon text-xl text-white text-center">You unlocked the full picture</h2>
            <motion.img
                src="/images/moon.png" 
                alt="moon" 
                className="w-[250px] h-[250px] object-cover overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            />
        </div>
    </motion.div>
  )
}

export default GameWon