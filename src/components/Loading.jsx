import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Updates every 30ms to complete in ~3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 w-full h-screen flex flex-col justify-center items-center bg-primary">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,  // Faster rotation for 3-second loading
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-20 h-20 rounded-full border-4 border-t-accent border-r-accent border-b-transparent border-l-transparent"
      />
      <h2 className={`${styles.sectionHeadText} mt-4 text-accent`}>Loading...</h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-secondary mt-2">{progress}%</p>
    </div>
  );
};

export default Loading; 