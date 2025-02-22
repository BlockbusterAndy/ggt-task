import { useState } from 'react'
import Question from '../components/custom/Question'
import Puzzle from '../components/custom/Puzzle'
import { GameContext } from '../contexts/gameContext'

const Game = () => {
  const [ gameConfig, setGameConfig ] = useState({
    score: 0,
    isCorrect: false
  })

  return (
    <GameContext.Provider value={{ gameConfig, setGameConfig }}>
      <section>
        <div className="flex flex-col justify-center items-center pt-32">
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