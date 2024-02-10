// CryptoCurrencyInfo.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoCurrencyInfo = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const cryptocurrencies = ['bitcoin', 'ethereum', 'solana'];
        const currencies = ['usd', 'eur', 'gbp']; // Add more currencies as needed

        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptocurrencies.join(',')}&vs_currencies=${currencies.join(',')}`);

        const newData = currencies.map(currency => ({
          currency,
          data: cryptocurrencies.map(crypto => ({
            name: crypto.charAt(0).toUpperCase() + crypto.slice(1),
            price: response.data[crypto][currency]
          }))
        }));

        setCryptoData(newData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div>
      <h2>Crypto Currency Information</h2>
      {cryptoData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              {cryptoData[0].data.map(crypto => (
                <th key={crypto.name}>{crypto.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cryptoData.map(row => (
              <tr key={row.currency}>
                <td>{row.currency.toUpperCase()}</td>
                {row.data.map(crypto => (
                  <td key={crypto.name}>${crypto.price}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CryptoCurrencyInfo;
