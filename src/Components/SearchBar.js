import { useSelector, useDispatch } from 'react-redux';

import {addCity} from '../Reducers/SearchBarSlice';


export function SearchBar() {
    // const cityList = useSelector(getCityList);
    const dispatch = useDispatch();

    return (
        <div>
            <div class="searchBar_container">
                <form>
                    <input type="text" placeholder="Type City Name" name="searchBar"></input>
                    <button onClick={(e) => console.log(searchCity(e))}><i class="fas fa-plus"></i></button>
                </form>
            </div>
        </div>
    );

    function searchCity (e) {
        e.preventDefault();
        dispatch(addCity);
    }

}