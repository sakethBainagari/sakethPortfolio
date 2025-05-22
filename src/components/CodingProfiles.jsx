import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

// Import profile icons
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const ProfileCard = ({ index, title, icon, link }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.5)}
    className='xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
      className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[200px] flex justify-evenly items-center flex-col'
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        {icon}
        <h3 className='text-white text-[18px] font-bold text-center mt-3'>
          {title}
        </h3>
      </a>
    </div>
  </motion.div>
);

const CodingProfiles = () => {
  const profiles = [
    {
      title: "LeetCode",
      icon: <SiLeetcode className="w-12 h-12 text-[#FFA116]" />,
      link: "https://leetcode.com/sakethbainagari",
    },
    {
      title: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="w-12 h-12 text-[#2F8D46]" />,
      link: "https://auth.geeksforgeeks.org/user/saketh2727",
    },
    {
      title: "CodeChef",
      icon: <SiCodechef className="w-12 h-12 text-[#5B4638]" />,
      link: "https://www.codechef.com/users/saketh2727",
    },
    {
      title: "HackerRank",
      icon: <SiHackerrank className="w-12 h-12 text-[#00EA64]" />,
      link: "https://www.hackerrank.com/sakethbainagari",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Coding Platforms.</h2>
        <h3 className={`${styles.sectionSubText} text-center mt-2`}>My Competitive Programming Journey</h3>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center items-center gap-10'>
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.title} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CodingProfiles, ""); 