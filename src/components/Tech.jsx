import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-10">
        <h3 className={`${styles.sectionSubText} text-center mb-5`}>Development Skills and Languages Known</h3>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div 
              className='w-28 h-28 flex flex-col items-center justify-center' 
              key={technology.name}
            >
              {isMobile ? (
                // Static version for mobile
                <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center border-2 border-accent hover:border-white transition-colors duration-300">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ) : (
                // 3D version for desktop
                <BallCanvas icon={technology.icon} />
              )}
              <p className="text-center mt-2 text-white-100">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
