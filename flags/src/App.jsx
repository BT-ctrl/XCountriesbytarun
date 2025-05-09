import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="countries-container">
      {error && <p className="error">Failed to load countries.</p>}
      {countries.length === 0 && !error ? (
        <p className="loading">Loading countries...</p>
      ) : (
        countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))
      )}
    </div>
  );
}

export default App;
