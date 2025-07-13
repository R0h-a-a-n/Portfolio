import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isProjects = location.pathname.startsWith('/projects');
  const navItemClass =
  (isProjects
    ? "text-white"
    : "text-black dark:text-white") +
  " focus:outline-none transition-all duration-200 rounded-lg px-3 py-1 " +
  "hover:bg-black hover:text-white dark:hover:bg-yellow-300 dark:hover:text-black hover:scale-105 w-full text-left";

  const handleProjectsClick = () => {
    setMobileOpen(false);
    navigate('/projects');
  };

  const handleHomeClick = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleContactClick = () => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };


  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  
  
  
  const navbarBg = isProjects
  ? 'bg-black'
  : 'bg-[radial-gradient(rgba(0,0,0,0.22)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(250,204,21,0.30)_1.5px,transparent_1.5px)] bg-[length:32px_32px] bg-[position:0_0]';

  const navbarText = isProjects ? 'text-white' : 'text-black dark:text-white';

  return (
    <nav className={`w-full flex justify-between items-center h-20 px-4 md:px-8 relative z-50 ${navbarBg} ${navbarText}`}>
      <div className="font-bold text-lg">
        <button onClick={handleHomeClick} className={navItemClass}>Home</button>
      </div>

      
      <div className="hidden md:flex flex-col items-center">
        <div className="flex space-x-8 font-bold text-base">
          <motion.button variants={{}} whileHover="hover" onClick={handleProjectsClick} className={navItemClass}>Projects</motion.button>
          <motion.div variants={{}} whileHover="hover">
            <Link to="/blog" className={navItemClass}>Blog</Link>
          </motion.div>
        </div>
        <motion.div
          className="h-px bg-black dark:bg-white mt-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      
      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <button
          className="ml-4 flex flex-col justify-center items-center w-10 h-10 rounded-lg border-2 border-black dark:border-white hover:bg-black dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-200"
          aria-label="Open menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 rounded bg-black dark:bg-white mb-1 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 rounded bg-black dark:bg-white mb-1 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 rounded bg-black dark:bg-white transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-black border-b-2 border-black dark:border-white shadow-lg flex flex-col items-center space-y-2 py-6 md:hidden z-50"
          >
            <button onClick={handleHomeClick} className={navItemClass + ' text-lg'}>Home</button>
            <button onClick={handleProjectsClick} className={navItemClass + ' text-lg'}>Projects</button>
            <Link to="/blog" className={navItemClass + ' text-lg'} onClick={() => setMobileOpen(false)}>Blog</Link>
            <button onClick={handleContactClick} className={navItemClass + ' text-lg'}>Contact <span className="text-xs">↗</span></button>
            <div className="mt-4"><ThemeToggle /></div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <div className="hidden md:flex items-center">
        <ThemeToggle />
        <button onClick={handleContactClick} className={navItemClass + ' font-bold text-base flex items-center gap-1 ml-4'}>
          Contact <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
} 