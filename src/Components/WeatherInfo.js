import { useSelector, useDispatch } from 'react-redux';

import { getCityInfoFiveDay } from '../Helper/ApiCalls';
import { getWeatherInfo } from '../Reducers/WeatherInfoSlice';

import { Button } from '@material-ui/core';


export function WeatherInfo() {
    const dispatch = useDispatch();
    
    const cityWeatherInfo = useSelector(getWeatherInfo);

    return (
        <div className="weather_info_container">
            {/* <h2>{cityWeatherInfo.name}</h2>
            <h1>Weather Icon</h1>
            <p>{cityWeatherInfo.temp}</p>
            <p>{cityWeatherInfo.weather}</p>
            <p>Wind: {cityWeatherInfo.wind}</p>
            <p>{cityWeatherInfo.pressure}</p>

            <div className="day1">
                <div>Daily Weather simple</div>
            </div> */}
            <div className="refresh">
                <Button onClick={() => fetchWeatherData(cityWeatherInfo.name)}>Refresh</Button>
            </div>
        </div>
    );

    function fetchWeatherData(city) {
        fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=c51223c219d6aec8cb8c5210449bd859`)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                let weatherObject = {
                    name: data.
                }
            }
        )
    }
}