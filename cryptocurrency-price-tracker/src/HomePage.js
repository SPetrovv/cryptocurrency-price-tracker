// HomePage.js

import React from 'react';
import './HomePage.css';
import CryptoCurrencyInfo from './CryptoCurrencyInfo'; // Create this component

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-container">
        <CryptoCurrencyInfo />
      </div>
    </div>
  );
};

export default HomePage;
