import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]*$/.test(name)) return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ndvlz5r",
        "template_684zs0d",
        {
          name: form.name,
          to_name: "Bainagari Saketh",
          email: form.email,
          to_email: "sakethbainagari@gmail.com",
          message: form.message,
          subject: `New message from ${form.name} - Portfolio Contact Form`,
          reply_to: form.email,
          sender_info: `Message from: ${form.name} (${form.email})`
        },
        "zqOB-nAaUsYdlbjNl"
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccessPopup(true);
          setTimeout(() => setShowSuccessPopup(false), 5000);

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setShowErrorPopup(true);
          setTimeout(() => setShowErrorPopup(false), 5000);
        }
      );
  };

  const getInputClassName = (fieldName) => {
    const baseClasses = 'bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium transition-all duration-300';
    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:border-red-500`;
    }
    if (form[fieldName].trim()) {
      return `${baseClasses} border-green-500 focus:border-green-500`;
    }
    return `${baseClasses} border-accent/20 focus:border-accent`;
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] custom-card p-8 rounded-2xl relative'
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={getInputClassName('name')}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={getInputClassName('email')}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className={getInputClassName('message')}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message}</span>
            )}
          </label>

          <button
            type='submit'
            disabled={loading || Object.values(errors).some(error => error !== "")}
            className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 ${
              loading || Object.values(errors).some(error => error !== "") 
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-accent hover:bg-accent/90'
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        {/* Social Media Links */}
        <div className="mt-10">
          <p className="text-white font-medium mb-4">Connect with me</p>
          <div className="flex gap-6">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/saketh-bainagari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full flex justify-center items-center bg-tertiary border border-accent/20 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/saketh_2727/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full flex justify-center items-center bg-tertiary border border-accent/20 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            
            {/* Gmail */}
            <a 
              href="mailto:sakethbainagari@gmail.com" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full flex justify-center items-center bg-tertiary border border-accent/20 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {/* Success and Error Popups remain unchanged */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessPopup(false)}
          >
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-xl flex items-center space-x-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Thank you for your message! I'll get back to you soon.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showErrorPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowErrorPopup(false)}
          >
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-xl flex items-center space-x-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span>Oops! Something went wrong. Please try again later.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
