import { motion } from "motion/react";
import PropTypes from "prop-types";

const Correct = (props) => {
  return (
    <motion.div
      className={
        `absolute top-0 left-0 w-full h-full flex flex-col justify-center bg-black/80 z-50 ` +
        props.className
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="font-coiny font-lg text-center text-4xl text-white pt-10"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Correct
      </motion.h2>

      <div className="flex flex-col items-center">
        <motion.img
          src="/images/astronaut-1.png"
          alt=""
          className="h-[300px]"
          initial={{ y: 180, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        <motion.div
          className="flex justify-between md:justify-evenly w-full px-4 md:px-24 z-20"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -400, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        >
          <img src="/images/rocket.png" alt="rocket" className="h-[120px] md:h-[220px]" />
          <img src="/images/rocket.png" alt="rocket" className="h-[120px] md:h-[220px]" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
        <img 
              src="/images/clouds-3.png" 
              alt="clouds"  
              className="w-full h-[170px] md:h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

Correct.propTypes = {
  className: PropTypes.string,
};

export default Correct;
