import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-item"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
