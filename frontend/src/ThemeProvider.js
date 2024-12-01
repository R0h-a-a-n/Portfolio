import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
