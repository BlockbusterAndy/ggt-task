import { motion } from "motion/react";

const Button = (props) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className={
        `px-8 py-3 rounded-xl overflow-hidden cursor-pointer transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-red-500 focus:scale-125` +
        props.className
      }
      onClick={props.onClick}
    >
      {props.text}
    </motion.button>
  );
};

export default Button;
