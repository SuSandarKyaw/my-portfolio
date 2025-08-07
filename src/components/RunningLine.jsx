import { motion } from "framer-motion";

const RunningLine = () => {
  return (
      <motion.div
      className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
      initial={{ scaleX: 0 }} // No originX → scales from center
      animate={{ scaleX: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut"
      }}
    />
  );
};
export default RunningLine;