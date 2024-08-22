import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const Weather = ({ weather, units }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails, wind } = weather;
  const { temp, temp_min, temp_max, humidity } = main;
  const { description, icon } = weatherDetails[0];
  const windSpeed = wind.speed;

  const temperatureUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="weather-card">
      <div className="weather-card-content">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="weather-details">
          <h2>{name} <WiThermometer /> {temp} {temperatureUnit}</h2>
          <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
          <p><WiThermometer /> Min Temp: {temp_min} {temperatureUnit}</p>
          <p><WiThermometer /> Max Temp: {temp_max} {temperatureUnit}</p>
          <p><WiHumidity /> Humidity: {humidity}%</p>
          <p><WiStrongWind /> Wind: {windSpeed} {windUnit}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
