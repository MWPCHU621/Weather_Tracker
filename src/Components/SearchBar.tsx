import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { convertCityToCoord, convertZipcodeToCoord, getCityInfoSevenDay } from '../Helper/ApiCalls';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import '../style/searchBar.css';
import { addWeatherInfo } from '../Reducers/WeatherInfoSlice';
import { getWeatherDayInfo } from '../Helper/HelperFunctions';
import { isConstructorDeclaration } from 'typescript';

export function CitySearchBar(): JSX.Element {

    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState(false);
    const [zipCountry, setZipcode] = useState("");

    
    return (
        <div className="searchBar_container">
            <form onSubmit={handleCitySubmit} className="add_city_form">
                <TextField className="search_city_textarea textarea" placeholder="Example: toronto" label="city name" value={cityName} onChange={handleCityChange} />
                <button type="submit" data-testid="citySearchBtn" className="add_city_btn"><AddIcon /></button>
            </form>

            <form onSubmit={handleZipcodeSubmit} className="add_city_form">
                <TextField 
                    className="search_zipcode_textarea textarea" 
                    placeholder="Example: a2c,ca" 
                    label="zipcode, country code"
                    value={zipCountry} 
                    onChange={handleZipcodeChange} 
                />
                <button type="submit" data-testid="zipSearchBtn" className="add_city_btn"> <AddIcon /> </button>
            </form>

            <p className={error ? 'show_error' : 'hide_error'}>Invalid city or zipcode country code combination. Please enter a valid input</p>
        </div>
    );

    function handleCityChange(e: any) {
        setCityName(e.target.value);
    }

    function handleZipcodeChange(e: any) {
        setZipcode(e.target.value);
    }

    function handleCitySubmit(e: any) {
        e.preventDefault();
        searchCity(cityName);
    }

    function handleZipcodeSubmit(e: any) {
        e.preventDefault();
        searchZipCode(zipCountry);
    }
    
    function searchCity (city: string) {
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
                console.log(data);
                let weatherInfo: any = {
                    description: data.current.weather[0].description,
                    currentTemp: data.current.feels_like + "C",
                    minTemp: data.daily[0].temp.min + "C",
                    maxTemp: data.daily[0].temp.max + "C",
                    windSpd: data.current.wind_speed,
                    precipitation: (data.daily[0].rain == undefined) ? 0 : data.daily[0].rain,
                    humidity:data.current.humidity,
                    dailyInfo: [],
                }
                
                for(let i=1; i<8; i++) {
                    weatherInfo.dailyInfo.push(getWeatherDayInfo(data.daily[i]));    
                }
                
                setError(false);
                dispatch(addWeatherInfo(weatherInfo));
            })
            .catch(error => setError(true));
            
        })
        .catch(error => setError(true));

    }

    function searchZipCode(zipCountry: string) {
        const strSplit = zipCountry.split(",");
        const zipcode = strSplit[0];
        const countryCode = strSplit[1];

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
                let weatherInfo: any = {
                    description: data.current.weather[0].description,
                    currentTemp: data.current.feels_like,
                    minTemp: data.daily[0].temp.min,
                    maxTemp: data.daily[0].temp.max,
                    windSpd: data.current.wind_speed,
                    precipitation:data.daily[0].rain,
                    humidity:data.current.humidity,
                    dailyInfo: [],
                }

                for(let i=1; i<8; i++) {
                    weatherInfo.dailyInfo.push(getWeatherDayInfo(data.daily[i]));    
                }
                
                setError(false);
                dispatch(addWeatherInfo(weatherInfo));
               
            })
            .catch(error => setError(true));
        })
        .catch(error => setError(true));
    }
}