import { FaMapMarkerAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import { icons_main, icons_small } from './icons';
import { getWeekDay } from '../API';

const WeatherDetails = ({ data, searchNewCity, error }) => {
  const [city, setCity] = useState('London');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    searchNewCity(city);
  };

  return (
    <>
      <div
        className={`pt-8 bg-${
          data.icon[data.icon.length - 1] === 'd' ? 'day' : 'night'
        } transition-all duration-500 ease-out bg-no-repeat bg-cover bg-center min-h-screen`}
      >
        <div className="app-inner shadow-xl w-96 mx-auto my-auto  rounded-md text-white ">
          <div className="overlay  animate-fade bg-black p-8 rounded-md bg-opacity-75">
            <div className=" search mb-4 flex justify-around ">
              <form onSubmit={onSubmitHandler}>
                <input
                  value={city}
                  className="appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none shadow-md focus:shadow-none"
                  placeholder="Enter a city"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />

                <button
                  type="submit"
                  className="text-black rounded-md ml-4 bg-blue-200 px-3 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Search
                </button>
              </form>
            </div>

            {error === 'error' ? (
              <h1>This city isn't available. Please try another one.</h1>
            ) : (
              <div className="details">
                <div className="location mt-8">
                  <p className="flex items-center">
                    <span className="mr-2">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="font-semibold text-2xl">{data.city}</span>
                  </p>
                  <p className="ml-6 text-gray-100">
                    {data.time} <span className="mx-2">{data.date}</span>
                    {data.weekday}
                  </p>
                </div>

                <div className="additional-data">
                  {icons_main[data.main ? data.main : 'Clouds']}
                  <div className="temp flex  mb-4">
                    <div className="text-7xl font-medium">{data.temp}°C</div>
                    <div className="self-end ml-4 ">
                      <p className="text-lg">{data.main}</p>
                      <div className="flex">
                        <span className="flex items-center">
                          <span className="mr-1">
                            <FaArrowUp />
                          </span>
                          <span>{data.temp_max}°</span>
                        </span>
                        <span className="flex items-center ml-3">
                          <span className="mr-1">
                            <FaArrowDown />
                          </span>
                          <span>{data.temp_min}°</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="details flex justify-between my-12">
                    <div className="px-2 border-r-2">
                      <p className="text-sm text-gray-100">Feels like</p>
                      <p className="text-lg ">{data.feels_like}°</p>
                    </div>
                    <div className="px-2 border-r-2">
                      <p className="text-sm text-gray-100">Humidity</p>
                      <p className="text-lg ">
                        {data.humidity}
                        <span className="text-xs text-gray-100">%</span>
                      </p>
                    </div>
                    <div className="px-2 border-r-2">
                      <p className="text-sm text-gray-100">Wind</p>
                      <p className="text-lg ">
                        {data.wind}
                        <span className="text-xs text-gray-100">m/s</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-sm text-gray-100">UV Index</p>
                      <p className="text-lg ">{data.uv}</p>
                    </div>
                  </div>

                  <div className="days flex justify-between">
                    <div className="px-2">
                      <p className="text-base text-gray-100">
                        {getWeekDay(data.next_four_days[0].day)}
                      </p>
                      <p className="w-10">
                        {
                          icons_small[
                            data.next_four_days[0].main
                              ? data.next_four_days[0].main
                              : 'Clouds'
                          ]
                        }
                      </p>
                      <p className="text-sm">
                        {data.next_four_days[0].temp_max}°/
                        {data.next_four_days[0].temp_min}°
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-base text-gray-100">
                        {getWeekDay(data.next_four_days[1].day)}
                      </p>
                      <p className="w-10">
                        {
                          icons_small[
                            data.next_four_days[1].main
                              ? data.next_four_days[1].main
                              : 'Clouds'
                          ]
                        }
                      </p>
                      <p className="text-sm">
                        {data.next_four_days[1].temp_max}°/
                        {data.next_four_days[1].temp_min}°
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-base text-gray-100">
                        {getWeekDay(data.next_four_days[2].day)}
                      </p>
                      <p className="w-10">
                        {
                          icons_small[
                            data.next_four_days[2].main
                              ? data.next_four_days[2].main
                              : 'Clouds'
                          ]
                        }
                      </p>
                      <p className="text-sm">
                        {data.next_four_days[2].temp_max}°/
                        {data.next_four_days[2].temp_min}°
                      </p>
                    </div>
                    <div className="px-2">
                      <p className="text-base text-gray-100">
                        {getWeekDay(data.next_four_days[3].day)}
                      </p>
                      <p className="w-10">
                        {
                          icons_small[
                            data.next_four_days[3].main
                              ? data.next_four_days[3].main
                              : 'Clouds'
                          ]
                        }
                      </p>
                      <p className="text-sm">
                        {data.next_four_days[3].temp_max}°/
                        {data.next_four_days[3].temp_min}°
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
