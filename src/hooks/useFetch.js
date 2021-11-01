import { useState, useEffect } from 'react';
import { APIFunctions } from '../API';

const useFetch = (city) => {
  const initialState = {
    loading: false,
    error: false,
    data: {},
  };

  const [weatherData, setWeatherData] = useState(initialState);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        setWeatherData.loading(true);
        setWeatherData.error(false);
        const coords = await APIFunctions.fetchCoords(city);
        const data = await APIFunctions.fetchWeatherDetails(coords);

        // Weather Information
        const date = new Date(data.current.dt * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth();
        const weekday = date.getUTCDay();

        var arrayOfWeekdays = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];

        // setWeatherData.data();
        const newWeatherData = {
          city: data.timezone,
          time: `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
          date: `${day}/${month}`,
          weekday: arrayOfWeekdays[weekday].slice(0, 3),
          icon: data.current.weather[0].icon,
          temp: Math.floor(data.current.temp),
          main: data.current.weather[0].main,
          temp_max: Math.floor(data.daily[0].temp.max),
          temp_min: Math.floor(data.daily[0].temp.min),
          feels_like: Math.floor(data.current.feels_like),
          humidity: Math.floor(data.current.humidity),
          wind: Math.floor(data.current.wind_speed),
          uv: data.current.uvi,
          // next_four_days: '',
        };
        setWeatherData.data(newWeatherData);
        setWeatherData.loading(false);
      } catch (error) {
        setWeatherData.error(true);
      }
    };

    fetchWeatherDetails();
  }, [city]);

  return weatherData;
};

export default useFetch;
