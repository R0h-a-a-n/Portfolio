import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Rohaan</h1>
          <p>AI/ML Engineering Student | 3rd Year B.Tech</p>
          <p>
            I am a passionate BTech student majoring in computer science engineering with an interest in machine learning.
            I specialize in creating solutions that enhance productivity and efficiency.
          </p>
          <div className="hero-buttons">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:ssrohaan178@gmail.com'}
            >
              Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf" // Path to your resume file
              download="Rohaan_Resume.pdf" // Suggested file name when downloaded
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="download-btn"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://via.placeholder.com/300" alt="Rohaan's Profile" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
