// WeatherApp.js
import WeatherInfo from './WeatherInfo';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: '',
    temp: null,
    tempmin: null,
    tempmax: null,
    humidity: null,
    feelsLike: null,
    weather: '',
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        Weather App by ZOYA
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <WeatherInfo info={weatherInfo} />
    </>
  );
}
