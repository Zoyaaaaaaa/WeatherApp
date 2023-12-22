// SearchBox.js
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY; 
  const [city, setCity] = useState('');

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        tempmax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCity('');
    const newInfo = await getWeatherInfo();

    if (newInfo) {
      updateInfo(newInfo);
    }
  };

  return (
    <>
      <h3>Search for weather</h3>
      <div className="searchbox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label=" ENTER CITY NAME"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Search
          </Button>
        </form>
      </div>
      <br />
    </>
  );
}
