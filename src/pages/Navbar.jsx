import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to /projects on click
  const handleProjectsClick = () => {
    navigate('/projects');
  };

  // Navigate to / on Home click
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  };

  return (
    <nav className="w-full flex justify-between items-center h-20 px-8 bg-transparent text-black">
      {/* Left: Logo */}
      <div className="font-bold text-lg">
        <button onClick={handleHomeClick} className="focus:outline-none">Rohaan</button>
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex flex-col items-center">
        <div className="flex space-x-16 font-bold text-base">
          <motion.button variants={navItemVariants} whileHover="hover" onClick={handleHomeClick} className="focus:outline-none">Home</motion.button>
          <motion.button variants={navItemVariants} whileHover="hover" onClick={handleProjectsClick} className="focus:outline-none">Projects</motion.button>
          <motion.div variants={navItemVariants} whileHover="hover">
            <Link to="/blog">Blog</Link>
          </motion.div>
        </div>
        <motion.div
          className="h-px bg-black mt-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Right: Contact */}
      <div>
        <button onClick={handleContactClick} className="font-bold text-base flex items-center gap-1 focus:outline-none">
          Contact <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
} 