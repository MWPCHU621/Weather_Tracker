import {useEffect, useState} from 'react';

import { Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import ClearIcon from '@material-ui/icons/Clear';




export function CitySimpleData(props) {
    const [city, setCity] = useState(props);

    useEffect(() => {
        setCity(props);
    }, [props]);

    return(
        <div className="simpleCityData">
            <Button onClick={props.getCityInfo}>{city.name} - {city.temperature} {city.weather}</Button>
            <Button onClick={() => props.refreshCity(city.name)}><RefreshIcon /></Button>
            <Button onClick={() => props.remove(city)}><ClearIcon /></Button>
        </div>
    )


    

}