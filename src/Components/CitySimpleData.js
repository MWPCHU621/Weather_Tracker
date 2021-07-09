import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ClearIcon from '@material-ui/icons/Clear';

import { removeCity } from '../Reducers/SearchBarSlice';
import { getCityInfo, getCityInfoFiveDay } from '../Helper/ApiCalls';


export function CitySimpleData(props) {
    const dispatch = useDispatch();
    const [city, setCity] = useState(props);

    useEffect(() => {
        setCity(props);
    }, [props]);

    return(
        <div className="simpleCityData">
            <Button onClick={getCityInfo}>{city.name} - {city.temperature} {city.weather}</Button>
            <Button onClick={refreshCity}><RefreshIcon /></Button>
            <Button onClick={remove(city)}><ClearIcon /></Button>
        </div>
    )


    function refreshCity(cityName) {
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c51223c219d6aec8cb8c5210449bd859`)
        // .then(res => res.json())
        // .then(
        //     (data) => {
        //         //creating new object to be stored in city List for display in left container.
        //         let cityData = {
        //             name: data.name,
        //             weather: data.weather[0].description,
        //             temperature: (Math.round(data.main.temp) + "C"),
        //         }
        

        //     },
        // )

        let data = getCityInfo(cityName);

        let cityData = {
            name: data.name,
            weather: data.weather[0].description,
            temp: (Math.round(data.main.temp) + "C"),
        }
    }

    function remove(city) {
        dispatch(removeCity(city));
    }

}