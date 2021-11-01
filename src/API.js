export const API_DATA = {
  KEY: '93c60de7ecd7e35e2f18235a97afc3d9',
  BASE_COORDS: 'https://api.openweathermap.org/data/2.5/weather',
  BASE_DATA: 'https://api.openweathermap.org/data/2.5/onecall?lat=',
};

export const APIFunctions = {
  fetchCoords: async (city) => {
    const endpoint = `${API_DATA.base_coord}?q=${city}&units=metric&APPID=${API_DATA.key}`;
    return await (await fetch(endpoint)).json();
  },

  fetchWeatherDetails: async (lat, lon) => {
    const endpoint = `${API_DATA.base_data}${lat}&lon=${lon}&units=metric&appid=${API_DATA.key}`;
    return await (await fetch(endpoint)).json();
  },
};
