import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const App = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 3
  });

  const [name, setName] = useState('');

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=82fa12dd6c070c70b0e9fc47f4912406&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          setData({
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed
          });
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center p-4">
      <div className="bg-blue-700 rounded-lg p-6 flex flex-col sm:w-full sm:max-w-md items-center space-y-4 shadow-lg">

        {/* Search Bar */}
        <div className="flex w-full space-x-2">
          <input
            type="text"
            placeholder="Enter City Name"
            className="flex-grow px-4 py-2 rounded-lg text-black bg-white"
            onChange={e => setName(e.target.value)}
          />
          <button
            className="bg-white p-2 rounded-full"
            onClick={handleClick}
          >
            <FaSearch className="text-2xl text-blue-700" />
          </button>
        </div>

        {/* Weather Info */}
        <div className="flex flex-col items-center">
          <img
            className="w-32 sm:w-40 object-contain"
            src="/WeatherApp/clouds.png"
            alt="Weather Icon"
          />
          <h1 className="text-3xl text-white font-semibold mt-2">{data.celcius}°C</h1>
          <h2 className="text-2xl text-white font-semibold">{data.name}</h2>
        </div>

        {/* Humidity and Wind */}
        <div className="w-full flex justify-between mt-4">
          <div className="flex flex-col items-center text-white">
            <img
              className="w-16 sm:w-20 object-contain"
              src="/WeatherApp/humidity.png"
              alt="Humidity"
            />
            <p className="text-2xl font-bold">{data.humidity}%</p>
            <p className="text-2xl font-bold">Humidity</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <img
              className="w-16 sm:w-20 object-contain"
              src="/WeatherApp/wind.png"
              alt="Wind"
            />
            <p className="text-2xl font-bold">{data.speed} km/h</p>
            <p className="text-2xl font-bold">Wind Speed</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
