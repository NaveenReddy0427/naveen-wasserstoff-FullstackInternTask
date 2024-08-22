const API_KEY = 'de645b10a8affb572e6224290821264b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city, units = 'metric') => {
  try {
    const url = `${BASE_URL}weather?q=${city}&units=${units}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchForecastData = async (city, units = 'metric') => {
  try {
    const url = `${BASE_URL}forecast?q=${city}&units=${units}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching forecast data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};