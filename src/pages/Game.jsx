import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Question from '../components/custom/Question'
import Puzzle from '../components/custom/Puzzle'
import Correct from '../components/shared/Correct'
import { GameContext } from '../contexts/gameContext'

const Game = () => {
  const [ gameConfig, setGameConfig ] = useState({
    score: 0,
    isCorrect: false,
    isIncorrect: false
  })

  return (
    <GameContext.Provider value={{ gameConfig, setGameConfig }}>
      <section>
        <AnimatePresence mode="wait">
          {gameConfig.isCorrect && <Correct key={gameConfig.score} />}
        </AnimatePresence>
        <div className="flex flex-col justify-center items-center pt-20">
          <h1 className="text-2xl text-white text-center font-coiny">Mystery Blocks</h1>
          <div className='pt-2'>
            <Question />
          </div>
          <div className='pt-2'>
            <Puzzle/>
          </div>
        </div>
      </section>
    </GameContext.Provider>

  )
}

export default Game