import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="section container">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  );
};

export default Projects;
