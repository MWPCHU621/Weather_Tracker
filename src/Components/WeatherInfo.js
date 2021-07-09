import { useSelector, useDispatch } from 'react-redux';

import { getCityInfoFiveDay } from '../Helper/ApiCalls';
import { getWeatherInfo } from '../Reducers/WeatherInfoSlice';

import { Button } from '@material-ui/core';


export function WeatherInfo() {
    const dispatch = useDispatch();
    
    const cityWeatherInfo = useSelector(getWeatherInfo);

    return (
        <div className="weather_info_container">
            <h2>{cityWeatherInfo.name}</h2>
            <h1>Weather Icon</h1>
            <p>{cityWeatherInfo.temp}</p>
            <p>{cityWeatherInfo.weather}</p>
            <p>Wind: {cityWeatherInfo.wind}</p>
            <p>{cityWeatherInfo.pressure}</p>

            <div className="day1">
                <div>{cityWeatherInfo.weekly[0]}</div>
            </div>

        </div>
    );
}