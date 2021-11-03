const API_KEY = '93c60de7ecd7e35e2f18235a97afc3d9';

export const API_DATA = {
  BASE_COORDS: 'https://api.openweathermap.org/data/2.5/weather',
  BASE_DATA: 'https://api.openweathermap.org/data/2.5/onecall?lat=',
};

export const fetchCoords = async (city) => {
  const endpoint = `${API_DATA.BASE_COORDS}?q=${city}&units=metric&APPID=${API_KEY}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return await data.coord;
};

export const fetchData = async (coords) => {
  const { lat, lon } = coords;
  const endpoint = `${API_DATA.BASE_DATA}${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return await data;
};

export const getWeatherDetails = (data) => {
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

  const weatherDetails = {
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
    next_four_days: [
      {
        day: '',
        main: data.daily[0].weather[0].main,
        temp_max: Math.floor(data.daily[0].temp.max),
        temp_min: Math.floor(data.daily[0].temp.min),
      },
      {
        day: '',
        main: data.daily[1].weather[0].main,
        temp_max: Math.floor(data.daily[1].temp.max),
        temp_min: Math.floor(data.daily[1].temp.min),
      },
      {
        day: '',
        main: data.daily[2].weather[0].main,
        temp_max: Math.floor(data.daily[2].temp.max),
        temp_min: Math.floor(data.daily[2].temp.min),
      },
      {
        day: '',
        main: data.daily[3].weather[0].main,
        temp_max: Math.floor(data.daily[3].temp.max),
        temp_min: Math.floor(data.daily[3].temp.min),
      },
    ],
  };
  console.log(data.daily[0].weather[0].main);
  return weatherDetails;
};
