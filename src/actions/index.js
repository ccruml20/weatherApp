import axios from 'axios';

const GOOGLE_API_KEY  = 'AIzaSyBZkjnxstbeSKKhPMpXRqTFAWKFWXjFJN4';
const WEATHER_API_KEY = '59801a1e9da5478a074ca92b7bfec55d';
const WEARTHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEARTHER_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request

  };
}
