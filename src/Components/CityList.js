import { useSelector, useDispatch } from 'react-redux';
import {getCityList, removeAll } from '../Reducers/CityListSlice';
import { CitySimpleData } from './CitySimpleData';
import { Button } from '@material-ui/core';

export function CityList() {

    const dispatch = useDispatch();
    const cityList = useSelector(getCityList);

    return (
        <div>
            <div className="city_list_container">
                <div>Recent Locations</div>
                {
                    cityList.map((city, index) => {
                        return (
                            <CitySimpleData key={index} {...city}/>
                        )
                    })
                }
                <Button onClick={removeAllCities}>Clear</Button>
            </div>
        </div>
    );

    //removes all cities from the list
    function removeAllCities() {
        dispatch(removeAll());
    }
}