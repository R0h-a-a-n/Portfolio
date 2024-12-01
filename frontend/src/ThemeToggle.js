import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="btn btn-outline-light">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
