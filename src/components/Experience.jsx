import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15, 44, 76, 0.8)",
        color: "#fff",
        border: "1px solid rgba(59, 194, 188, 0.3)",
        boxShadow: "0 8px 32px rgba(4, 26, 47, 0.3)",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease-out",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(15, 44, 76, 0.8)" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg, 
        boxShadow: "0 0 0 4px #3BC2BC, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease-out"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain transition-transform duration-500 ease-out hover:scale-110'
          />
        </div>
      }
      className="hover:-translate-y-2 transition-transform duration-300 ease-out"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-accent opacity-5 blur-xl"></div>
      
      <div>
        <h3 className='text-gradient text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
