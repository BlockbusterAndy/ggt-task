import { useState, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GameContext } from "../../contexts/gameContext";

const Question = () => {
  const shapes = [
    { id: 1, name: "Square", image: "/images/shapes/square.png", answer: "Square", options: ["Circle", "Square", "Triangle", "Oval"] },
    { id: 2, name: "Circle", image: "/images/shapes/circle.png", answer: "Circle", options: ["Circle", "Square", "Triangle", "Oval"] },
    { id: 3, name: "Triangle", image: "/images/shapes/triangle.png", answer: "Triangle", options: ["Circle", "Square", "Triangle", "Oval"] },
  ];

  const Config = useContext(GameContext);
  const [currentShape, setCurrentShape] = useState(shapes[0]);
  const [answer, setAnswer] = useState("");

  const getNextShape = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * shapes.length);
    } while (shapes[randomIndex].id === currentShape.id);

    setAnswer("");
    setCurrentShape(shapes[randomIndex]);
  };

  const handleScore = (updatedScore, updatedCount) => {
    if (updatedScore === 9 && updatedCount === 9) {
      Config.setGameConfig((prev) => ({ ...prev, isWon: true }));
      // console.log("You won the game!");
    } else if (updatedCount === 9 && updatedScore < 9) {
      Config.setGameConfig((prev) => ({ ...prev, isGameOver: true }));
      // console.log("Game Over!");
    } else {
      console.log("Game continues...");
    }
  };
  
  const handleAnswer = (selectedOption) => {
    try {
      setAnswer(selectedOption);
      Config.setGameConfig((prev) => {
        const isCorrect = selectedOption === currentShape.answer;
        const updatedScore = isCorrect ? prev.score + 1 : prev.score;
        const updatedCount = prev.count + 1;
  
        // Call handleScore with updated values
        setTimeout(() => handleScore(updatedScore, updatedCount), 1000);
  
        return {
          ...prev,
          score: updatedScore,
          count: updatedCount,
          isCorrect: isCorrect,
          isIncorrect: !isCorrect,
        };
      });
  
      setTimeout(getNextShape, 1000);
    } catch (error) {
      console.error("Error in handleAnswer:", error);
    } finally {
      setTimeout(() => {
        console.log("⏳ Delaying Reset... Allowing Exit Animation");
        Config.setGameConfig((prev) => ({ ...prev, isCorrect: false, isIncorrect: false }));
      }, 2000);
    }
  };
  
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-kreon font-semibold text-xl md:text-2xl text-white pt-4 pb-6 md:px-10">
        Which shape is this?
      </h2>
      
      <div className="flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentShape.id}
            src={currentShape.image}
            alt={currentShape.name}
            className="w-32 h-32 md:w-42 md:h-42"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            
          />
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {currentShape.options.map((option, index) => (
          <button
            key={index}
            className={`font-kreon text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110 ${
              answer && option === currentShape.answer ? "bg-green-500" : "bg-gray-700"
            }`}
            onClick={() => handleAnswer(option)}
          >
            {index + 1}. {option}
          </button>
        ))}
      </div>

      <div className="pt-4">
        <p className="font-kreon text-white text-base md:text-xl">Your Score: {Config.gameConfig.score}</p>
      </div>
    </div>
  );
};

export default Question;
