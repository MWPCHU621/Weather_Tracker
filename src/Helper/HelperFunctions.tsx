import rainy from '../Icons/amcharts_weather_icons/animated/rainy-5.svg';
import thunder from '../Icons/amcharts_weather_icons/animated/thunder.svg';
import drizzle from '../Icons/amcharts_weather_icons/animated/rainy-1.svg';
import snow from '../Icons/amcharts_weather_icons/animated/snowy-5.svg';
import clear from '../Icons/amcharts_weather_icons/animated/day.svg';
import clouds from '../Icons/amcharts_weather_icons/animated/cloudy-day-1.svg';

//creates data structure for a single day which includes date, day of week, temp, and weather.
export function getWeatherDayInfo(data: any): object {
    let date = new Date(data.dt * 1000);
    let dayString = date.toUTCString();

    let dayInfo = {
        dayOfWeek: dayString.slice(0,3),
        date: dayString.slice(5,7),
        weather: data.weather[0].main,
        temp: (Math.round(data.temp.day) + "C")
    }
    return dayInfo;
}

// displays an icon corresponding to the weather passed in as the argument.
export function weatherToIcon(weather: string): JSX.Element {
    let icon;
    switch(weather) {
        case "Thunderstorm":
            icon = <img src={thunder} height="100%" alt="thunder icon" />
            break;
        case "Drizzle":
            icon = <img src={drizzle} height="100%" alt ="drizzle icon"/>
            break;
        case "Rain":
            icon  = <img src={rainy} height="100%" alt="rainy icon"/>
            break;
        case "Snow":
            icon = <img src={snow} height="100%" alt="snowy icon"/>
            break;
        case "Clear":
            icon = <img src={clear} height="100%" alt="clear icon"/>
            break;
        case "Clouds":
            icon = <img src={clouds} height="100%" alt="cloudy icon"/>
            break;
        default:
            //display the weather condition for specific conditions that don't have available svg icons.
            icon = <p>{weather}</p>;
            break;
    }
    return icon;
}