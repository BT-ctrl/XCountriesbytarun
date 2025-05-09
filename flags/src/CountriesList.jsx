import React, { useEffect, useState } from 'react';
import './CountriesList.css';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://xcountries-backend.azurewebsites.net/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Optional: for debugging
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading countries...</p>;

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <div key={country.abbr} className="country-card">
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="flag"
          />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
