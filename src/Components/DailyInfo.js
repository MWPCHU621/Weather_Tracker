import { useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { weatherToIcon } from '../Helper/HelperFunctions';




export function DailyInfo(props) {
    const [dailyInfo, setDailyInfo] = useState(props);

    useEffect(() => {
        setDailyInfo(props);
    }, [props]);
    
    return(
        <div className="daily_weather_info">
            <div>{props.dailyInfo.date}</div>
            <div>{props.dailyInfo.dayOfWeek}</div>
            <div>
                {
                    weatherToIcon(props.dailyInfo.weather)
                    // props.dailyInfo.weather
                }
            </div>
            <div>{props.dailyInfo.temp}</div>
        </div>
    )

}