import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div className="section container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}</strong>: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
