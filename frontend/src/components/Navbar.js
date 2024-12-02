import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Portfolio</div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;
