import {useState} from 'react';

import { Button } from '@material-ui/core';

export function CitySimpleData(props) {
    const [city] = useState(props);

    return(
        <div className="simpleCityData">
            <Button>{city.name} {city.temp} {city.weather}</Button>
            <Button>Refresh</Button>
            <Button>Remove</Button>
        </div>
    )

}