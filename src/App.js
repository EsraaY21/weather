import WeatherDetails from './components/WeatherDetails';

const data = {
  city: 'city',
  time: `time`,
  date: `date`,
  weekday: 'weekday',
  icon: 'icon',
  temp: 'temp',
  main: '',
  temp_max: 'temp_max',
  temp_min: 'temp_min',
  feels_like: 'feels_like',
  humidity: 'humidity',
  wind: 'wind',
  uv: 'uv',
  // next_four_days: '',
};

const App = () => {
  return (
    <div>
      <WeatherDetails data={data} />
    </div>
  );
};

export default App;
