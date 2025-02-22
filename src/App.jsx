import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import StarsBackground from './components/shared/StarsBackground';
import Game from './pages/Game';

function App() {

  return (
    <>
      <StarsBackground/>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App