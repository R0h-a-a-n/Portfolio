import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    id="about"
    className="section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>About Me</h2>
    <p>
      I am a third-year B.Tech Computer Science Engineering student with a CGPA of 8.5. My love for coding, particularly 
      in competitive programming and machine learning, drives me to constantly enhance my skills. 
    </p>
    <p>
      I have a deep passion for mathematics and physics, which complement my interest in problem-solving and algorithm design.
      Alongside my academic pursuits, I enjoy working on projects like <strong>Focus</strong>, <strong>Browser Monitor</strong>, and 
      <strong>Metamaster</strong>, which reflect my commitment to building practical and innovative solutions.
    </p>
    <p>
      My curiosity and dedication to continuous learning keep me motivated to explore new domains and technologies,
      especially those that intersect coding, AI/ML, and real-world applications.
    </p>
  </motion.div>
);

export default About;
