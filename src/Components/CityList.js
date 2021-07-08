import { useSelector, useDispatch } from 'react-redux';

import {getCityList} from '../Reducers/SearchBarSlice';
import { CitySimpleData } from './CitySimpleData';

import { Button } from '@material-ui/core';


export function CityList() {
    // const cityList = useSelector(getCityList);
    const dispatch = useDispatch();

    const cityList = useSelector(getCityList);

    return (
        <div>
            <div className="city_list_container">
                {
                    cityList.map(city => {
                        return (
                            
                            // <Button >{city.name} {city.temperature} {city.weather}</Button>
                            <CitySimpleData {...city}/>
                        )
                    })
                }
            </div>
        </div>
    );

}