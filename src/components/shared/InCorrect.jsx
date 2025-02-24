import { motion } from "motion/react";

const InCorrect = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-18 bg-black/80 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className="flex flex-col items-center w-full">
            <motion.h2
                className="font-coiny font-lg text-center text-4xl text-white pb-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
                Wrong
            </motion.h2>
            <img src="/images/astronaut-2.png" alt="astronaut" className="h-[320px] z-20" />
            <motion.div
                className="absolute bottom-35 flex justify-between w-full px-4 z-20"
                initial={{opacity: 0 }}
                animate={{opacity: 1 }}
                >
                <img src="/images/rocket.png" alt="rocket" className="h-[140px]" />
                <img src="/images/rocket.png" alt="rocket" className="h-[140px]" />
            </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
            <img src="/images/clouds.png" alt="clouds" />
        </div>
    </motion.div>
  );
};

export default InCorrect;
