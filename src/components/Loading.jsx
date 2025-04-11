import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pikarun from "../assets/gif/pikarun.gif"; // Adjust path if needed

const Loading = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete(); // Notify parent when loading is done
    }, 2000); // Loading for 2 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center min-h-screen bg-white fixed top-0 left-0 w-full h-full z-50"
        >
          <img src={pikarun} alt="Loading..." className="w-32 h-32" />
          <h2 className="text-black font-extrabold text-lg mt-4">Loading...</h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
