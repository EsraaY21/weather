import { FaMapMarkerAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCircleFill,
} from 'react-icons/bs';
import { RiMistFill } from 'react-icons/ri';
import { useState } from 'react';

const WeatherDetails = ({ data }) => {
  const [city, setCity] = useState('london');

  const searchNewCity = () => {
    console.log(city);
  };

  const icons = {
    Rain: (
      <BsFillCloudRainFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
    ),
    Clouds: (
      <BsFillCloudsFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
    ),
    Clear: (
      <BsFillCircleFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
    ),
    Mist: (
      <RiMistFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
    ),
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    searchNewCity(city);
  };

  return (
    <>
      <div
        className={`pt-8 bg-${
          data.icon[data.icon.length - 1] === 'd' ? 'day' : 'night'
        } transition-all duration-500 ease-out bg-no-repeat bg-cover bg-center h-screen`}
      >
        <div className="shadow-xl app-inner h-app w-96 mx-auto my-auto  bg-no-repeat bg-cover bg-center rounded-md text-white">
          <div className="overlay  animate-fade bg-black p-8 rounded-md h-app bg-opacity-50">
            <div className="search mb-4 flex justify-around ">
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
              {icons[data.main]}
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

              <div className="details flex justify-between my-8">
                <div className="px-2 border-r-2">
                  <p className="text-sm text-gray-100">Feels like</p>
                  <p className="text-lg ">{data.feels_like}°</p>
                </div>
                <div className="px-2 border-r-2">
                  <p className="text-sm text-gray-100">Humidity</p>
                  <p className="text-lg ">
                    {data.humidity}
                    <span className="text-xs text-gray-100"> %</span>
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
                  <p className="text-base text-gray-100  ">Thu</p>
                  <p className="my-2">icon</p>
                  <p className="text-sm">26°/26°</p>
                </div>
                <div className="px-2">
                  <p className="text-base text-gray-100  ">Fri</p>
                  <p className=" my-2">icon</p>
                  <p className="text-sm">26°/26°</p>
                </div>
                <div className="px-2">
                  <p className="text-base text-gray-100  ">Sat</p>
                  <p className="my-2">icon</p>
                  <p className="text-sm">26°/26°</p>
                </div>
                <div className="px-2">
                  <p className="text-base text-gray-100  ">Sun</p>
                  <p className="  my-2">icon</p>
                  <p className="text-sm">26°/26°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
