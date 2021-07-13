import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addCity} from '../Reducers/CityListSlice';
import { getCityInfo } from '../Helper/ApiCalls';
import SearchBar from 'material-ui-search-bar';
import '../style/searchBar.css';

export function CitySearchBar() {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    
    return (
        <div className="searchBar_container">
            <SearchBar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => { searchCity(value); setValue(""); }} 
                placeholder="Type City Name"
                style={{boxShadow:"none"}}
                />
            <p className={error ? 'show_error' : 'hide_error'}>Invalid city. Please enter a valid city</p>
        </div>
    );
    
    function searchCity (city) {
         getCityInfo(city).then((data) => {
             let cityData = {
                 name: data.name,
                 weather: data.weather[0].main,
                 temperature: (Math.round(data.main.temp) + "C"),
             }
             setError(false);
             dispatch(addCity(cityData));
         })
         .catch(error => {
             setError(true);
         })
     }
    
}