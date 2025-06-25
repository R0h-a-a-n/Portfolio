import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="ml-6 p-2 rounded-full border-2 border-black dark:border-white bg-white dark:bg-gray-900 text-black dark:text-yellow-300 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="#facc15" stroke="#222" strokeWidth="2"/><path stroke="#222" strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#222" stroke="#facc15" strokeWidth="2"/></svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

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
    <nav className="w-full flex justify-between items-center h-20 px-8 bg-transparent text-black dark:text-white">
      <div className="font-bold text-lg">
        <button onClick={handleHomeClick} className="focus:outline-none text-black dark:text-white">Home</button>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div className="flex space-x-16 font-bold text-base">
          <motion.button variants={navItemVariants} whileHover="hover" onClick={handleProjectsClick} className="focus:outline-none text-black dark:text-white">Projects</motion.button>
          <motion.div variants={navItemVariants} whileHover="hover">
            <Link to="/blog" className="text-black dark:text-white">Blog</Link>
          </motion.div>
        </div>
        <motion.div
          className="h-px bg-black dark:bg-white mt-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <div className="flex items-center">
        <ThemeToggle />
        <button onClick={handleContactClick} className="font-bold text-base flex items-center gap-1 focus:outline-none ml-4 text-black dark:text-white">
          Contact <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
} 