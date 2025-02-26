import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-40">
        <div className="p-4 flex flex-col items-center gap-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl md:text-5xl text-white text-center font-coiny"
            >
              Mystery Blocks
            </motion.h1>
            <div className="flex justify-center items-center">
              <motion.img 
              src="/images/astronaut_home.png" 
              alt="astronaut on rocket"
              className="md:h-[250px]"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              />
            </div>
            <motion.h2 
              className="text-2xl md:text-3xl text-white text-center font-coiny"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Can You Unmask the Mystery
            </motion.h2>
          </div>
          <motion.div 
            className="p-4 w-[100vw] flex flex-col items-center gap-0 text-center text-white text-sm md:text-xl font-calibri font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="w-[320px] md:w-full">Guess the answer correctly, and watch the mystery image slowly come to life!</p>
            <p className="w-[320px] md:w-full">Incorrect guesses keep the mystery hidden... How far can you go?</p>
          </motion.div>
      </div>
      <div className="flex justify-center items-center pt-8 w-full">
        <Button text="Play Now" className="block mt-4 bg-[#FF1C1C] text-white font-semibold z-10" onClick={() => navigate("/game")} />
        <div className="absolute flex justify-between md:justify-around w-full px-6 md:px-22 pt-10">
          <img src="/images/rocket.png" alt="rocket"  className="h-[150px] md:h-[220px]" />
          <img src="/images/rocket.png" alt="rocket"  className="h-[150px] md:h-[220px]"/>
        </div>
      </div>
    </motion.section>
  )
}

export default HomeScreen;