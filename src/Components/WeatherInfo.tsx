import { useSelector } from 'react-redux';
import { getWeatherInfo, getWeatherInfoBool } from '../Reducers/WeatherInfoSlice';
import { DailyInfo } from './DailyInfo';
import '../style/weatherInfo.css';

export function WeatherInfo(): JSX.Element {

    const cityWeatherInfo = useSelector(getWeatherInfo);
    const hasDetailedData = useSelector(getWeatherInfoBool);

    // conditional render for when there is detailed data and when there isn't detailed data to render.
    if(!hasDetailedData) {
        return(
            <div className="weather_info_container"></div>
        )
    } else {
        return (
            <div className="weather_info_container">
                <div className="detailed_city">
                    <div className="detailed_city_info">
                        <p>Current Temperature: {cityWeatherInfo.currentTemp}</p>
                        <p>Min Temperature: {cityWeatherInfo.minTemp}</p>
                        <p>Max Temperature: {cityWeatherInfo.maxTemp}</p>
                        <p>Weather: {cityWeatherInfo.description[0].toUpperCase() + cityWeatherInfo.description.substring(1)}</p>
                        <p>Wind Speed: {cityWeatherInfo.windSpd}</p>
                        <p>Precipitation: {cityWeatherInfo.precipitation}</p>
                        <p>Humidity: {cityWeatherInfo.humidity}</p>
                    </div>
                </div>
                <div className="daily_weather_data">
                    {
                        cityWeatherInfo.dailyInfo.map((dailyData: object, index: number) => {
                            return (<DailyInfo key={index} dailyInfo={dailyData}/>)
                        })
                    }
                </div>
            </div>
        );
    }
}