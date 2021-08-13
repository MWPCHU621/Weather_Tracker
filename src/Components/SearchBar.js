import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addCity} from '../Reducers/CityListSlice';
import { getCityInfo, convertCityToCoord, convertZipcodeToCoord, getCityInfoSevenDay } from '../Helper/ApiCalls';
import AddIcon from '@material-ui/icons/Add';
import { TextField, FormControl, Select, MenuItem } from '@material-ui/core';
import '../style/searchBar.css';
import { addWeatherInfo } from '../Reducers/WeatherInfoSlice';

export function CitySearchBar() {

    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const [countryCode, setCountryCode] = useState("");
    
    return (
        <div className="searchBar_container">
            <form onSubmit={handleCitySubmit} className="add_city_form">
                <TextField className="add_city_textarea" placeholder="Type City Name" value={cityName} onChange={handleCityChange}/>
                <button type="submit" className="add_city_btn"><AddIcon /></button>
            </form>

            <form onSubmit={handleZipcodeSubmit} className="add_city_form">
                <TextField className="add_city_textarea" placeholder="Type first 3 letters of the zipcode" value={zipcode} inputProps={{maxLength: 3}} onChange={handleZipcodeChange} />
                <TextField className="add_city_textarea" placeholder="Type the 2 letter country code" value={countryCode} inputProps={{maxLength: 2}} onChange={handleCountryChange} />
                <button type="submit" className="add_city_btn"> <AddIcon /> </button>
            </form>

            <p className={error ? 'show_error' : 'hide_error'}>Invalid city or zipcode country code combination. Please enter a valid input</p>
        </div>
    );

    function handleCityChange(e) {
        setCityName(e.target.value);
    }

    function handleZipcodeChange(e) {
        setZipcode(e.target.value);
    }

    function handleCountryChange(e) {
        setCountryCode(e.target.value);
    }

    function handleCitySubmit(e) {
        e.preventDefault();
        searchCity(cityName);
    }

    function handleZipcodeSubmit(e) {
        e.preventDefault();
        searchZipCode(zipcode, countryCode);
    }
    
    function searchCity (city) {
        
        convertCityToCoord(city).then((data) => {
            const lat = data[0].lat.toFixed(2);
            const lon = data[0].lon.toFixed(2);
            const coord = {
                lat: lat,
                lon: lon
            };

            return coord;
        })
        .then(coord => {
            getCityInfoSevenDay(coord.lat, coord.lon).then((data) => {
                let weatherInfo = {
                    description: data.current.weather[0].description,
                    currentTemp: data.current.feels_like,
                    minTemp: data.daily[0].temp.min,
                    maxTemp: data.daily[0].temp.max,
                    windSpd: data.current.wind_speed,
                    precipitation:data.daily[0].rain,
                    humidity:data.current.humidity,
                }
                
                setError(false);
                dispatch(addWeatherInfo(weatherInfo));
            })
            .catch(error => setError(true));

            
        })
        .catch(error => setError(true));

    }

    function searchZipCode(zipcode, countryCode) {
        convertZipcodeToCoord(zipcode, countryCode).then(data => {
            const lat = data.lat.toFixed(2);
            const lon = data.lon.toFixed(2);

            const coord={
                lat:lat,
                lon:lon
            };

            return coord;
        })
        .then(coord => {
            getCityInfoSevenDay(coord.lat, coord.lon).then((data) => {
                let weatherInfo = {
                    description: data.current.weather[0].description,
                    currentTemp: data.current.feels_like,
                    minTemp: data.daily[0].temp.min,
                    maxTemp: data.daily[0].temp.max,
                    windSpd: data.current.wind_speed,
                    precipitation:data.daily[0].rain,
                    humidity:data.current.humidity,
                }
                
                setError(false);
                dispatch(addWeatherInfo(weatherInfo));
               
            })
            .catch(error => setError(true));
        })
        .catch(error => setError(true));
    }
}