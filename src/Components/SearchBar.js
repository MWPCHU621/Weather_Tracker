import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addCity} from '../Reducers/CityListSlice';
import { getCityInfo } from '../Helper/ApiCalls';
import AddIcon from '@material-ui/icons/Add';
import '../style/searchBar.css';

export function CitySearchBar() {

    const dispatch = useDispatch();
    // const [value, setValue] = useState("");
    const [cityName, setCityName] = useState("");
    const [error, setError] = useState(false);
    
    return (
        <div className="searchBar_container">
            <form onSubmit={handleSubmit} className="add_city_form">
                <input type="text" className="add_city_textarea" size="28" value={cityName} onChange={handleChange} placeholder="Type City Name"/>
                <button type="submit" className="add_city_btn"><AddIcon /></button>
            </form>

            <p className={error ? 'show_error' : 'hide_error'}>Invalid city. Please enter a valid city</p>
        </div>
    );

    function handleChange(e) {
        setCityName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchCity(cityName);
        setCityName("");
    }
    
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