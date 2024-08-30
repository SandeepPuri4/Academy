import { motion } from "framer-motion";

const ZoomInEffect = ({ children }) => {
  // Define the animation properties
  const variants = {
    hidden: { scale: 0.95, opacity: 0 }, // Start state with a smaller scale
    visible: { scale: 1, opacity: 1 }, // End state with actual size
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }} // Adjusted duration and easing
      variants={variants}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default ZoomInEffect;
