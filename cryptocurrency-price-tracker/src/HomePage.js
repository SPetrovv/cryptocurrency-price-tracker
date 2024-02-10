// HomePage.js

import React, { useState } from 'react';
import './HomePage.css';
import CryptoCurrencyInfo from './CryptoCurrencyInfo';

const HomePage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`home-page ${isDarkTheme ? 'dark-theme' : ''}`}>
      <button
        className="theme-button"
        onClick={toggleTheme}
        style={{ backgroundColor: isDarkTheme ? '#fff' : '#000', color: isDarkTheme ? '#000' : '#fff' }}
      >
        {isDarkTheme ? '🌞' : '🌜'}
      </button>
      <div className="content-container">
        <CryptoCurrencyInfo />
      </div>
    </div>
  );
};

export default HomePage;
