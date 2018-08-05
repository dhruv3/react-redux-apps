import axios from 'axios';

const API_KEY = '97624185a943ecc0045393d7eeaa4861'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = ROOT_URL + `&q=${city},us`;
  const request = axios(url);

  return{
    type: 'FETCH_WEATHER',
    payload: request
  }
}
