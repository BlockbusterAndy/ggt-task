import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <section className="">
      <div className="pt-40">
        <div className="p-4 flex flex-col items-center gap-4">
            <h1 className="text-2xl text-white text-center font-coiny">Mystery Blocks</h1>
            <div className="flex justify-center items-center">
              <motion.img 
              src="/images/astronaut_home.png" 
              alt="astronaut on rocket"
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
            <h2 className="text-2xl text-white text-center font-coiny">Can You Unmask the Mystery</h2>
          </div>
          <div className="p-4 w-[100vw] flex flex-col items-center gap-0 text-center text-white text-sm font-calibri font-semibold">
            <p className="w-[320px]">Guess the answer correctly, and watch the mystery image slowly come to life!</p>
            <p className="w-[320px]">Incorrect guesses keep the mystery hidden... How far can you go?</p>
          </div>
      </div>
      <div className="flex justify-center items-center pt-8 w-full">
        <Button text="Play Now" className="block mt-4 bg-[#FF1C1C] text-white font-semibold z-10" onClick={() => navigate("/game")} />
        <div className="absolute flex justify-between w-full px-6 pt-10">
          <img src="/images/rocket.png" alt="rocket" height={200} />
          <img src="/images/rocket.png" alt="rocket" height={200} />
        </div>
      </div>
    </section>
  )
}

export default HomeScreen;