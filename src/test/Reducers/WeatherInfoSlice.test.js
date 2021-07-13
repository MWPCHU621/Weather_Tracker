import WeatherInfoSlice, { addWeatherInfo } from "../../Reducers/WeatherInfoSlice";

describe("Weather Info Reducer", () => {

    const initialState = {
        weatherInfo: {},
        hasDetailedData: false,
    };

    const testData1 = {
        name: "London",
        currentTemp: "15C",
        currentWeather: "cloudy",
        description: "Scattered clouds",
        wind: "3ms 160 deg",
        pressure: "1024",
        dailyWeatherData: [
            {
                dayOfWeek: "Mon",
                date: "10",
                weather: "Cloudy",
                temp: "15C"
            },
            {
                dayOfWeek: "Tues",
                date: "11",
                weather: "Clouds",
                temp: "18C"
            },
            {
                dayOfWeek: "Wed",
                date: "12",
                weather: "Clear",
                temp: "20C"
            },
            {
                dayOfWeek: "Thurs",
                date: "13",
                weather: "Clear",
                temp: "22C"
            },
            {
                dayOfWeek: "Fri",
                date: "14",
                weather: "Clear",
                temp: "22C"
            }
        ]
    }; 

    it("should handle initial state", () => {
        expect(WeatherInfoSlice(undefined, {type: 'unknown'})).toEqual( {
            weatherInfo: {},
            hasDetailedData: false,
        });
    });

    it("should add weather info", () => {
        expect(WeatherInfoSlice(initialState, addWeatherInfo(testData1))).toEqual({
            weatherInfo:{
                name: "London",
                currentTemp: "15C",
                currentWeather: "cloudy",
                description: "Scattered clouds",
                wind: "3ms 160 deg",
                pressure: "1024",
                dailyWeatherData: [
                    {
                        dayOfWeek: "Mon",
                        date: "10",
                        weather: "Cloudy",
                        temp: "15C"
                    },
                    {
                        dayOfWeek: "Tues",
                        date: "11",
                        weather: "Clouds",
                        temp: "18C"
                    },
                    {
                        dayOfWeek: "Wed",
                        date: "12",
                        weather: "Clear",
                        temp: "20C"
                    },
                    {
                        dayOfWeek: "Thurs",
                        date: "13",
                        weather: "Clear",
                        temp: "22C"
                    },
                    {
                        dayOfWeek: "Fri",
                        date: "14",
                        weather: "Clear",
                        temp: "22C"
                    }
                ]
            },
            hasDetailedData: true
        });
    })

});