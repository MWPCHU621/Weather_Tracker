import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    cityList:[],
};


export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,

   reducers: {
       //adds a city with its basic info: name, weather, temperature to the store as an object.
       addCity: (state, action) => {
           //checks to see if the length of the list is already full at 8 items or not.
            if(state.cityList.length >= 8) {
                state.cityList.pop();
            }

            //takes into account duplicate cities
            let cityNameList = state.cityList.map(city => city.name);
            
            if(cityNameList.includes(action.payload.name)) { //checks to see if the city thats to be added already exists or not.
                let index = cityNameList.indexOf(action.payload.name);
                state.cityList.splice(index, 1, action.payload);
            } else { //the city to be added doesn't already exist in the list.
                state.cityList.splice(0,0,action.payload);
            }

        },

        //refreshes the data for a given city by replacing the city object with a new city object of the same city.
        refreshCityData: (state, action) => {
            let cityNameList = state.cityList.map(city => city.name);
            let index = cityNameList.indexOf(action.payload.name); //finds the index of the given city in the store array.
            state.cityList.splice(index, 1, action.payload);
        },

        //removes a given city from the store
        removeCity: (state, action) => {
            //first way of implementation where I pass in a filtered arrray without the city in question and set state as that new array
            // state = action.payload;

            //second implementation where I do the filtering here and only pass the city in question in.
            let cityNameList = state.cityList.map(city => city.name);
            let index = cityNameList.indexOf(action.payload.name); //finds the index of the given city in the store array.
            state.cityList.splice(index, 1);
        },

        //removes all cities from the store
        removeAll: (state) => {
            state.cityList = [];
        }

   },
    
});

export const { addCity, removeCity, removeAll, refreshCityData } = searchBarSlice.actions;

export const getCityList = (state) => state.cities.cityList;

export default searchBarSlice.reducer;


