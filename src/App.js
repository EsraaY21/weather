import WeatherDetails from './components/WeatherDetails';
import { fetchCoords, fetchData, getWeatherDetails } from './API';
import { useState } from 'react';

const initialState = {
  city: 'Europe/London',
  time: `time`,
  date: `date`,
  weekday: 'Thursday',
  icon: '03n',
  temp: '27',
  main: 'Clouds',
  temp_max: '28',
  temp_min: '27',
  feels_like: '26',
  humidity: '80',
  wind: '8',
  uv: '2',
  // next_four_days: '',
};

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(initialState);

  const handleNewCity = async (city) => {
    try {
      const coords = await fetchCoords(city);
      const data = await fetchData(coords);
      const weatherDetails = getWeatherDetails(data);
      setWeatherDetails(weatherDetails);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div>
      <WeatherDetails data={weatherDetails} searchNewCity={handleNewCity} />
    </div>
  );
};

export default App;
