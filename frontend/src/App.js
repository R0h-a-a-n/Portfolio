import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const SectionWrapper = ({ children, className }) => (
  <motion.div
    className={`section-wrapper ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <SectionWrapper className="bg-light">
        <About />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="bg-blue">
        <Skills />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper className="bg-purple">
        <Projects />
      </SectionWrapper>

      {/* Footer Section */}
      <footer className="text-center p-3 bg-yellow text-white">
        <p>
          Contact me at: <a href="mailto:ssrohaan178@gmail.com">ssrohaan178@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/R0h-a-a-n" target="_blank" rel="noopener noreferrer">R0h-a-a-n</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
