import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skill-category">
      <div className="skill-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="skill-title">{title}</div>
        <motion.div
          className="arrow"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          className="skill-content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <p> </p>
      <div className="skills-wrapper">
        <SkillCategory title="Programming Languages">
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>TypeScript</li>
          </ul>
        </SkillCategory>
        <SkillCategory title="Technologies">
          <ul>
            <li>Docker</li>
            <li>Git</li>
            <li>MySQL</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </SkillCategory>
        <SkillCategory title="IT Constructs">
          <ul>
            <li>Object-Oriented Programming</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
          </ul>
        </SkillCategory>
      </div>
    </div>
  );
};

export default Skills;
