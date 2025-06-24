import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer id="contact" className="bg-transparent text-black py-12 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/R0h-a-a-n" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/r0h-a-a-n/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:ssrohaan178@gmail.com" className="text-gray-800 hover:text-black">
            <FaEnvelope size={32} />
          </a>
        </div>
        <div className="mb-8">
          <a
            href="https://drive.google.com/file/d/1dHQZzuIZpvwDFkFpNfrPK2jSLzLWfrRU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            View My Resume
          </a>
        </div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Rohaan S S. All rights reserved.
        </p>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
} 