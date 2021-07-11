import { useSelector, useDispatch } from 'react-redux';
import {getCityList, removeAll } from '../Reducers/CityListSlice';
import { CitySimpleData } from './CitySimpleData';
import { Button } from '@material-ui/core';
import '../style/cityList.css';

export function CityList() {

    const dispatch = useDispatch();
    const cityList = useSelector(getCityList);

    return (
        <div className="city_list_container">
            <p className="container_title">Recent Locations</p>
            <div className="city_container">
                {
                    cityList.map((city, index) => {
                        return (
                            <CitySimpleData key={index} {...city} />
                        )
                    })
                }
            </div>
            <Button onClick={removeAllCities} className="clear_city_btn">Clear</Button>
        </div>
    );

    //removes all cities from the list
    function removeAllCities() {
        dispatch(removeAll());
    }
}