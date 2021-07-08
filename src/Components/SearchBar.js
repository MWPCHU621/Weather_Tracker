import { useSelector, useDispatch } from 'react-redux';

import {addCity} from '../Reducers/SearchBarSlice';

import { Input, Button, FormControl} from '@material-ui/core';


export function SearchBar() {
    // const cityList = useSelector(getCityList);
    const dispatch = useDispatch();

    return (
        <div>
             {/* <div class="searchBar_container">
                 {/* need to swap to material UI for better form dealings */}
                 {/* <form>
                     <input type="text" placeholder="Type City Name" name="searchBar"></input>
                     <button onClick={(e) => console.log(searchCity(e))}><i class="fas fa-plus"></i></button>
                 </form>
             </div> */}

            <div class="searchBar_container">
                <form>
                    <FormControl>
                        <Input placeholder="Type City Name"/>
                        <Button >plus icon </Button>
                    </FormControl>
                </form>
                
            </div>

        </div>
    );

    //will remove once above form is swapped for form from material UI
    function searchCity (e) {
        e.preventDefault();
        dispatch(addCity(e));
    }

}