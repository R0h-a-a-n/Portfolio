import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Ensure this is correctly imported
import App from './App';
import { ThemeProvider } from './ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
