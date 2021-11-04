import WeatherDetails from './components/WeatherDetails';
import { useEffect, useState } from 'react';
import { fetchCoords, fetchData, getWeatherDetails } from './API';
import { CgSpinner } from 'react-icons/cg';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null);

  const handleNewCity = async (city) => {
    try {
      setError(false);
      setLoading(true);
      const coords = await fetchCoords(city);
      const data = await fetchData(coords);
      const weatherDetails = getWeatherDetails(data);
      setWeatherDetails(weatherDetails);
    } catch (error) {
      setError('error');
    }
    setLoading(false);
  };

  useEffect(() => {
    handleNewCity('London');
  }, []);

  if (error === true) {
    return (
      <div className="h-screen bg-green">
        <h1 className="text-center">An error happened. Please try again.</h1>
        <button></button>
      </div>
    );
  }

  console.log(error);
  return (
    <>
      {weatherDetails ? (
        <div>
          <WeatherDetails
            data={weatherDetails}
            searchNewCity={handleNewCity}
            error={error}
          />
        </div>
      ) : (
        <div className="text-center flex h-screen">
          <CgSpinner className="animate-spin m-auto h-1/4 w-1/4" />
        </div>
      )}
    </>
  );
};

export default App;
