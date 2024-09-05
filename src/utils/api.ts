import { WeatherData } from "../type/weather";

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
    import.meta.env.VITE_APP_ID
  }`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return {
    icon: data.weather[0].icon,
    temperature: Math.floor(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    location: data.name,
  };
};