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
            icon = <img src="../../public/amcharts_weather_icons/animate/thunder.svg" />
            break;
        case "Drizzle":
            icon = <img src="../../public/amcharts_weather_icons/animate/rainy-1.svg" />
            break;
        case "Rain":
            console.log("DEBUG");
            icon = <img src="../../../public/amcharts_weather_icons/animated/rainy-5.svg" />
            break;
        case "Snow":
            icon = <img src="../../public/amcharts_weather_icons/animate/snowy-5.svg" />
            break;
        case "Clear":
            icon = <img src="../../public/amcharts_weather_icons/animate/day.svg" />
            break;
        case "Clouds":
            icon = <img src="../../public/amcharts_weather_icons/animate/cloudy-day-1.svg" />
            break;
        default:
            break;
    }

    return icon;
}