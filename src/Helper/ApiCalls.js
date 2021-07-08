//fetches a single day's worth of weather data for a given city name
export function getCityInfo(cityName){
    let cityData;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c51223c219d6aec8cb8c5210449bd859`)
        .then(res => res.json())
        .then(
            (data) => {
                cityData = data;
                return cityData;
            },

        )
}

//fetches 5 days worth of weather data for a given city name
export function getCityInfoFiveDay(cityName) {
    let cityData;
    fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=metric&cnt=5&appid=c51223c219d6aec8cb8c5210449bd859`)
        .then(res => res.json())
        .then(
            (data) => {
                cityData = data;
            }
        )
    return cityData;
}