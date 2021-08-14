import { weatherToIcon } from '../Helper/HelperFunctions';
import '../style/dailyInfo.css';

export function DailyInfo(props: any): JSX.Element {

    const dailyInfo = props.dailyInfo;
    
    return(
        <div className="daily_weather_info">
            <div>{dailyInfo.date}</div>
            <div>{dailyInfo.dayOfWeek}</div>
            <div> { weatherToIcon(dailyInfo.weather) } </div>
            <div>{dailyInfo.weather}</div>
            <div>{dailyInfo.temp}</div>
        </div>
    )
}