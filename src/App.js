import WeatherDetails from './components/WeatherDetails';

const data = {
  city: 'Europe/London',
  time: `time`,
  date: `date`,
  weekday: 'Thursday',
  icon: '03d',
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
  return (
    <div>
      <WeatherDetails data={data} />
    </div>
  );
};

export default App;
