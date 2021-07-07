import { useSelector, useDispatch } from 'react-redux';


export function SearchCity() {
    // const cityList = useSelector(fetchCityList);
    const dispatch = useDispatch();

    return (
        <div>
            <div class="searchBar_container">
                <form>
                    <input type="text" placeholder="Type City Name" name="searchBar"></input>
                    <button type="submit" onClick="findCity()"><i class="fas fa-plus"></i></button>
                </form>
            </div>
        </div>
    );



}