import { useSelector, useDispatch } from 'react-redux';

import {getCityList, removeCity, removeAll, refreshCityData} from '../Reducers/SearchBarSlice';
import { CitySimpleData } from './CitySimpleData';
import { getCityInfo, getCityInfoFiveDay } from '../Helper/ApiCalls';

import { Button } from '@material-ui/core';


export function CityList() {
    const dispatch = useDispatch();

    const cityList = useSelector(getCityList);

    return (
        <div>
            <div className="city_list_container">
                <div>Recent Locations</div>
                {
                    cityList.map((city, index) => {
                        return (
                            <CitySimpleData key={index} refreshCity={refreshCity} remove={remove} getCityDetailedInfo={getCityDetailedInfo} {...city}/>
                        )
                    })
                }
                <Button onClick={removeAllCities}>Clear</Button>
            </div>
        </div>
    );

    //gets 5 days worth of weather info for given city
    function getCityDetailedInfo(city) {
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

            }
            //need to use dispatch to add info to new object in store.
        )
    }

    //refreshes the simple weather info for a given city
    function refreshCity(cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c51223c219d6aec8cb8c5210449bd859`)
        .then(res => res.json())
        .then(
            (data) => {
                //creating new object to be stored in city List for display in left container.
                let cityData = {
                    name: data.name,
                    weather: data.weather[0].description,
                    temperature: (Math.round(data.main.temp) + "C"),
                }

                dispatch(refreshCityData(cityData));
            },
        )

    }

    //removes a single given city from the list 
    function remove(city) {
        dispatch(removeCity(city));
    }

    //removes all cities from the list
    function removeAllCities() {
        dispatch(removeAll());
    }

    //Helper function for getWeather Info
    function getWeatherDayInfo(data) {
        let date = new Date(data.dt * 1000);
        let dayString = date.toUTCString();


        let dayInfo = {
            dayOfWeek: dayString.slice(0,3),
            date: dayString.slice(5,7),
            weather: data.weather.main,
            temp: (Math.round(data.temp.day) + "C")
        }

        return dayInfo;
    }

}