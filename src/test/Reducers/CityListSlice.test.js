import CityListSlice, {
    addCity,
    refreshCityData,
    removeCity,
    removeAll
} from "../../Reducers/CityListSlice";

describe('city list reducer', () => {
    let initialState = {
        cityList:[],
    };

    const city1 = {
        name: "London",
        weather: "cloudy",
        temperature: "15C"
    };

    const city2 = {
        name: "London",
        weather: "Sunny",
        temperature: "22C"
    };

    it("should handle initial state", () => {
        expect(CityListSlice(undefined, {type: 'unknown'})).toEqual( {
            cityList:[]
        });
    });

    it("should add city", () => {

        expect(CityListSlice(initialState, addCity(city1))).toEqual({
            cityList:[{
                name: "London",
                weather: "cloudy",
                temperature: "15C"
            }]
        });
    });

    it("should refresh city data by replacing old data with new data", () => {
        initialState = CityListSlice(initialState, addCity(city1));

        expect(CityListSlice(initialState, refreshCityData(city2))).toEqual({
            cityList:[{
                name: "London",
                weather: "Sunny",
                temperature: "22C"
            }]
        });
    });

    it("should remove city from cityList", () => {
        CityListSlice(initialState, addCity(city1));

        expect(CityListSlice(initialState, removeCity(city1))).toEqual({
            cityList:[]
        });
    });

    it("should remove all cities from cityList", () => {
        CityListSlice(initialState, addCity(city1));
        CityListSlice(initialState, addCity(city2));

        expect(CityListSlice(initialState, removeAll())).toEqual({
            cityList:[]
        });
    });
});