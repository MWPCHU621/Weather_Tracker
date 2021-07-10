import rainy from '../Icons/amcharts_weather_icons/animated/rainy-5.svg';
import thunder from '../Icons/amcharts_weather_icons/animated/thunder.svg';
import drizzle from '../Icons/amcharts_weather_icons/animated/rainy-1.svg';
import snow from '../Icons/amcharts_weather_icons/animated/snowy-5.svg';
import clear from '../Icons/amcharts_weather_icons/animated/day.svg';
import clouds from '../Icons/amcharts_weather_icons/animated/cloudy-day-1.svg';



//Helper function for getWeather Info
export function getWeatherDayInfo(data) {
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

export function weatherToIcon(weather) {
    let icon;
    switch(weather) {
        case "Thunderstorm":
            icon = <img src={thunder} />
            break;
        case "Drizzle":
            icon = <img src={drizzle} />
            break;
        case "Rain":
            icon  = <img src={rainy} />
            break;
        case "Snow":
            icon = <img src={snow} />
            break;
        case "Clear":
            icon = <img src={clear} />
            break;
        case "Clouds":
            icon = <img src={clouds} />
            break;
        default:
            break;
    }

    return icon;
}