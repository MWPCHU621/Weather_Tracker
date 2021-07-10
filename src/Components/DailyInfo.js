import { weatherToIcon } from '../Helper/HelperFunctions';

export function DailyInfo(props) {

    const dailyInfo = props.dailyInfo;
    
    return(
        <div className="daily_weather_info">
            <div>{dailyInfo.date}</div>
            <div>{dailyInfo.dayOfWeek}</div>
            <div> { weatherToIcon(dailyInfo.weather) } </div>
            <div>{dailyInfo.temp}</div>
        </div>
    )
}