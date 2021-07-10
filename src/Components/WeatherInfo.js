import { useSelector, useDispatch } from 'react-redux';

import { getCityInfoFiveDay } from '../Helper/ApiCalls';
import { 
    getWeatherInfo, 
    addWeatherInfo, 
    getWeatherInfoBool 
} from '../Reducers/WeatherInfoSlice';
import { DailyInfo } from './DailyInfo';
import { getWeatherDayInfo, weatherToIcon } from '../Helper/HelperFunctions';

import { Button } from '@material-ui/core';


export function WeatherInfo() {
    const dispatch = useDispatch();
    
    const cityWeatherInfo = useSelector(getWeatherInfo);
    const hasDetailedData = useSelector(getWeatherInfoBool);

    if(!hasDetailedData) {
        return(
            <div className="empty_weather_info_container"></div>
        )
    }else {
        return (
            <div className="weather_info_container">
                <h2>{cityWeatherInfo.name}</h2>
                <h1>{weatherToIcon(cityWeatherInfo.currentWeather)}</h1>
                <p>{cityWeatherInfo.currentTemp}</p>
                <p>{cityWeatherInfo.currentWeather}</p>
                <p>Wind: {cityWeatherInfo.wind}</p>
                <p>Pressure {cityWeatherInfo.pressure}</p>
    
                <div className="daily_weather_data">
                    {
                        cityWeatherInfo.dailyWeatherData.map((dailyData, index) => {
                            return (<DailyInfo key={index} dailyInfo={dailyData}/>)
                        })
                    }
                </div>
                <div className="refresh">
                    <Button onClick={() => fetchWeatherData(cityWeatherInfo.name)}>Refresh</Button>
                </div>
            </div>
        );
    }


    function fetchWeatherData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&units=metric&appid=c51223c219d6aec8cb8c5210449bd859`)
        .then(res => res.json())
        .then(
            (data) => {
                let newData = {
                    name: data.city.name,
                    currentTemp: (Math.round(data.list[0].temp.day) + "C"),
                    currentWeather: data.list[0].weather[0].main,
                    wind: ( Math.round(data.list[0].speed) + "ms " + data.list[0].deg + " deg"),
                    pressure: data.list[0].pressure,
                    dayOne: getWeatherDayInfo(data.list[0]),
                    dayTwo: getWeatherDayInfo(data.list[1]),
                    dayThree: getWeatherDayInfo(data.list[2]),
                    dayFour: getWeatherDayInfo(data.list[3]),
                    dayFive: getWeatherDayInfo(data.list[4]),
                }

                dispatch(addWeatherInfo(newData));

            }
        )
    }
}