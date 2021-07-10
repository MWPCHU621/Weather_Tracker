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
import RefreshIcon from '@material-ui/icons/Refresh';


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
                    <Button onClick={() => fetchWeatherData(cityWeatherInfo.name)}><RefreshIcon /></Button>
                </div>
            </div>
        );
    }

    //fetches new 5 day weather data and overwrites current 5 day weather data in the store.
    function fetchWeatherData(city) {
        getCityInfoFiveDay(city)
        .then(data => {
            //formatting incoming data for easy access and display to be stored in the store.
            let newData = {
                name: data.city.name,
                currentTemp: (Math.round(data.list[0].temp.day) + "C"),
                currentWeather: data.list[0].weather[0].main,
                wind: ( Math.round(data.list[0].speed) + "ms " + data.list[0].deg + " deg"),
                pressure: data.list[0].pressure,
                dailyWeatherData: [],
            }

            //loop to create and push modified daily info to newData to be added to store.
            for(let i=0; i<5; i++) {
                newData.dailyWeatherData.push(getWeatherDayInfo(data.list[i]));
            }

            dispatch(addWeatherInfo(newData));
        
        })
    }
}