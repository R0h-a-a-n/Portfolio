import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Section */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
