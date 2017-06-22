import axios from 'axios';

import {FETCH_WEATHER} from './type';


const API_KEY = 'a49b40006fa26c7b0d357d40a63e7386';
const API_BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${API_BASE_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}