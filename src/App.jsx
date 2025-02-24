import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { GameContext } from './contexts/gameContext';
import HomeScreen from './pages/HomeScreen';
import StarsBackground from './components/shared/StarsBackground';
import Game from './pages/Game';
import GameEnd from './pages/GameEnd';

function App() {
  const [ gameConfig, setGameConfig ] = useState({
    score: 0,
    count: 0,
    isCorrect: false,
    isIncorrect: false,
    isGameOver: false,
    isWon: false,
  })

  return (
    <>
      <GameContext.Provider value={{ gameConfig, setGameConfig }}>
        <StarsBackground/>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/game" element={<Game />} />
              <Route path="/game-end" element={<GameEnd />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </main>
      </GameContext.Provider>
    </>
  )
}

export default App