import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error("Error fetching skills:", error));
  }, []);

  return (
    <motion.div
      id="skills"
      className="section"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <strong>{skill.name}</strong>: {skill.level}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
