import { useDispatch } from 'react-redux';
import { addWeatherInfo } from '../Reducers/WeatherInfoSlice';
import { getCityInfo, getCityInfoFiveDay } from '../Helper/ApiCalls';
import { getWeatherDayInfo, weatherToIcon } from '../Helper/HelperFunctions';
import { removeCity, refreshCityData} from '../Reducers/CityListSlice';
import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ClearIcon from '@material-ui/icons/Clear';
import '../style/citySimpleData.css';

export function CitySimpleData(props) {

    const dispatch = useDispatch();
    const city = props;

    return(
        <div className="simple_city_data">
            <Button 
                className="city_text" 
                onClick={() => getCityDetailedInfo(city.name)}
                style={{justifyContent:"flex-start", backgroundColor:"transparent", fontSize:"large"}}
                disableRipple
            > 
                {city.name} - {city.temperature} {weatherToIcon(city.weather)} 
            </Button>
            <Button className="city_refresh" size="small" onClick={() => refreshCity(city.name)}><RefreshIcon /></Button>
            <Button className="city_remove" onClick={() => remove(city)}><ClearIcon /></Button>
        </div>
    )

    //gets 5 days worth of weather info for given city
    function getCityDetailedInfo(city) {
        getCityInfoFiveDay(city)
        .then(data => {
            let newData = {
                name: data.city.name,
                currentTemp: (Math.round(data.list[0].temp.day) + "C"),
                currentWeather: data.list[0].weather[0].main,
                description: data.list[0].weather[0].description,
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

    //refreshes the simple weather info for a given city
    function refreshCity(cityName) {
        getCityInfo(cityName)
        .then(data => {
            // creating new object to be stored in city List for display in left container.
            let cityData = {
                name: data.name,
                weather: data.weather[0].description,
                temperature: (Math.round(data.main.temp) + "C"),
            }
            dispatch(refreshCityData(cityData));
        })
    }

    //removes a single given city from the list 
    function remove(city) {
        dispatch(removeCity(city));
    }
}