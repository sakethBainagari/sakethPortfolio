import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary opacity-90"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-gradient">Saketh</span>
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} mt-4 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Developer & AI Enthusiast<br className="sm:block hidden" />
            Building intelligent applications with AI
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border border-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/4 w-20 h-20 rounded-full bg-accent opacity-20 blur-xl"></div>
        <div className="absolute right-10 bottom-1/4 w-32 h-32 rounded-full bg-accent opacity-20 blur-xl"></div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
