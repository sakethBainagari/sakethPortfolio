import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPreview(true);
  };

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img 
              src={logo} 
              alt='logo' 
              className='w-9 h-9 object-contain rounded-full cursor-pointer hover:scale-110 transition-transform duration-300' 
              onClick={handleLogoClick}
            />
            <p className='font-bold cursor-pointer flex'>
              <span className="text-white text-[18px] hover:text-gradient transition-colors duration-300">BAINAGARI SAKETH</span> &nbsp;
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              className="relative bg-tertiary p-2 rounded-lg shadow-lg max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-3 right-3 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                onClick={() => setShowPreview(false)}
              >
                ×
              </button>
              <div className="p-4">
                <img 
                  src={logo} 
                  alt="Logo Preview" 
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <p className="text-center text-white mt-4 font-medium">Hello👋 I'm Saketh</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
