import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  // Navigate to /projects on click
  const handleProjectsClick = (e) => {
    e.preventDefault();
    navigate('/projects');
  };

  // Navigate to / on Home click
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-6 md:px-16 font-sans text-black">
      {/* Left: Logo and Coded */}
      <div className="flex items-center space-x-2">
        <div className="bg-black text-white rounded w-8 h-8 flex items-center justify-center font-bold text-lg">R</div>
        <span className="text-sm">© coded by Rohaan</span>
      </div>
      {/* Center: Navigation */}
      <div className="hidden md:flex space-x-16 font-bold text-base">
        <button onClick={handleHomeClick} className="focus:outline">Home</button>
        <button onClick={handleProjectsClick} className="focus:outline">Projects</button>
        <Link to="/blog">Blog</Link>
      </div>
      {/* Right: Contact */}

      <div>
        <a href="#contact" className="font-bold text-base flex items-center gap-1">Contact <span className="text-xs">↗</span></a>
      </div>
    </nav>
  );
} 