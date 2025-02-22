import { useState, useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/gameContext';

const ImageRevealPuzzle = () => {
  const Config = useContext(GameContext);
  const [revealedCells, setRevealedCells] = useState(new Array(9).fill(false));
  
  const handleReveal = () => {
    const unrevealedIndices = revealedCells
      .map((cell, index) => !cell ? index : -1)
      .filter(index => index !== -1);
      
    if (unrevealedIndices.length > 0) {
      const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
      setRevealedCells(prev => prev.map((cell, idx) => idx === randomIndex ? true : cell));
    }
  };

  useEffect(() => {
    if(Config.gameConfig.score === 0){
      return
    } else {
      handleReveal();
    };

  }, [Config.gameConfig.score]);

  return (
    <div className="flex flex-col items-center gap-4">
      
      <div className="relative w-[200px] h-[200px]">
        {/* Main Image */}
        <img 
          src="/images/moon.png" 
          alt="puzzle" 
          className="absolute w-full h-full object-cover"
        />
        
        {/* Overlay Grid */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {revealedCells.map((revealed, index) => (
            <div 
              key={index}
              className={`border-2 border-black transition-colors duration-300 ${
                revealed ? 'bg-transparent' : 'puzzle-bg'
              }`}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageRevealPuzzle;