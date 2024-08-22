import { useState } from 'react';
import Weather from './components/features/Weather';
import UnitToggle from './components/features/UnitToggle';
import Forecast from './components/features/Forecast';
import { fetchForecastData, fetchWeatherData } from './components/api/weatherApi';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const weatherData = await fetchWeatherData(city, units);
      const forecastData = await fetchForecastData(city, units);
      setWeather(weatherData);
      setForecast(forecastData);
      setError(null);
      setCity('')
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Weather Forecast Dashboard</h1>
      </div>
      <div className="controls">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
        <UnitToggle units={units} onChange={setUnits} />
      </div>
      {error && <div className="error">{error}</div>}
      <div className="dashboard">
        <Weather weather={weather} units={units} />
        <Forecast forecast={forecast} units={units} />
      </div>
    </div>
  );
};

export default App;