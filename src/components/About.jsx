import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.5)}
      className='w-full custom-card p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden'
      >
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <div className="p-3 rounded-full bg-tertiary border border-accent flex justify-center items-center">
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        </div>

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi, I'm Saketh Bainagari, a Computer Science undergraduate at MLR Institute of Technology, specializing in AI & Machine Learning. I’m passionate about building intelligent, full-stack applications that create real-world impact.I’ve developed tools like an AI-powered News Research Tool using LangChain, Ollama, and Flask, and an ML-based crop prediction app called AgriPredict. My core skills include Python, Java, React, Node.js, Firebase, and NLP tools like Hugging Face and FAISS. I enjoy combining clean UI/UX with scalable backend systems to build solutions that matter.
      </motion.p>

      <div className='mt-20'>
        <motion.h3 
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText} text-center mb-8`}
        >
          Love to work on
        </motion.h3>
        <div className='flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
