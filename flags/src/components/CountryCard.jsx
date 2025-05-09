import React from "react";
import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <p>{country.name}</p>
    </div>
  );
}

export default CountryCard;
