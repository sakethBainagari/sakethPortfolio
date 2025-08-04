import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen width is larger than 1024px (laptop/desktop)
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
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
              {isDesktop ? (
                // 3D version for desktop/laptop
                <BallCanvas icon={technology.icon} />
              ) : (
                // Static version for all other devices
                <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center border-2 border-accent hover:border-white transition-colors duration-300">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
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
