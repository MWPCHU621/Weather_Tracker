//converts city name to lat long for use in api call
export function convertCityToCoord(cityName) {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=c5bc463716cbbe021b14ac41ed34c9de`)
        .then(res => res.json())
}

//converts zip code to lat long for use in api call
export function convertZipcodeToCoord(zipcode, country) {
    return fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${country}&appid=c5bc463716cbbe021b14ac41ed34c9de`)
        .then(res => res.json())
}

//fetches 7 days worth of weather data for a given city name
export function getCityInfoSevenDay(lat,long) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=metric&appid=c5bc463716cbbe021b14ac41ed34c9de`)
        .then(res => res.json())
}