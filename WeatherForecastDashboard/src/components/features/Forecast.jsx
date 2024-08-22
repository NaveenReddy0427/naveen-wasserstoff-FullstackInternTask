const Forecast = ({ forecast, units }) => {
    if (!forecast) return null;
  
    const dailyForecast = forecast.list.filter(item =>
      item.dt_txt.includes('12:00:00')
    );
  
    const temperatureUnit = units === 'metric' ? '°C' : '°F';
  
    // Function to get background class based on weather description
    const getWeatherClass = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return 'clear-sky';
      case 'few clouds':
        return 'few-clouds';
      case 'scattered clouds':
        return 'scattered-clouds';
      case 'broken clouds':
        return 'broken-clouds';
      case 'shower rain':
        return 'shower-rain';
      case 'rain':
        return 'rain';
      case 'light rain':
        return 'light-rain';
      case 'thunderstorm':
        return 'thunderstorm';
      case 'snow':
        return 'snow';
      case 'mist':
        return 'mist';
      case 'overcast clouds':
        return 'overcast-clouds';
      default:
        return 'default-weather';
    }
  };
  
  
    return (
      <div className="forecast">
        {dailyForecast.map((item) => {
          const { main, weather, dt_txt } = item;
          const { temp } = main;
          const { description, icon } = weather[0];
          const date = new Date(dt_txt).toLocaleDateString();
          const weatherClass = getWeatherClass(description);
  
          return (
            <div key={dt_txt} className={`forecast-card ${weatherClass}`}>
              <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
              <div>
                <h2>{date}</h2>
                <p>{temp} {temperatureUnit}</p>
                <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Forecast;