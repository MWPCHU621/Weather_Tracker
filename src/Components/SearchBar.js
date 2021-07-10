import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addCity} from '../Reducers/CityListSlice';
import { getCityInfo } from '../Helper/ApiCalls';
import SearchBar from 'material-ui-search-bar';

export function CitySearchBar() {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    return (
        <div>
            <div className="searchBar_container">
                <SearchBar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    onRequestSearch={() => { searchCity(value); setValue(""); }} 
                />
                <hr className="horizontal_line"></hr>
            </div>
        </div>
    );

    function searchCity (city) {
        getCityInfo(city).then((data) => {
            let cityData = {
                name: data.name,
                weather: data.weather[0].description,
                temperature: (Math.round(data.main.temp) + "C"),
            }
            dispatch(addCity(cityData));
        })
        .catch(error => {
            alert("Invalid City. Please enter a valid city");
        })
    }
}