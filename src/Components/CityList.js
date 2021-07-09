import { useSelector, useDispatch } from 'react-redux';

import {getCityList, removeCity, removeAll} from '../Reducers/SearchBarSlice';
import { CitySimpleData } from './CitySimpleData';
import { getCityInfo, getCityInfoFiveDay } from '../Helper/ApiCalls';

import { Button } from '@material-ui/core';


export function CityList() {
    const dispatch = useDispatch();

    const cityList = useSelector(getCityList);

    return (
        <div>
            <div className="city_list_container">
                {
                    cityList.map((city, index) => {
                        return (
                            <CitySimpleData key={index} refreshCity={refreshCity} remove={remove} getCityInfo={getCityInfo} {...city}/>
                        )
                    })
                }
                <Button onClick={removeAllCities}>Clear</Button>
            </div>
        </div>
    );

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

            },
        )
    }

    function remove(city) {
        dispatch(removeCity(city));
        
        // let newCityList = cityList.filter(cities => cities.name != city.name);
        // console.log("DEBUG", newCityList);
        // dispatch(removeCity(newCityList));
    }

    function removeAllCities() {
        dispatch(removeAll());
    }

}