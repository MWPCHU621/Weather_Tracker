import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    weatherInfo: {},
    hasDetailedData: false,
};


export const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState,

   reducers: {
       addWeatherInfo: (state, action) => {
           state.weatherInfo = action.payload;
           state.hasDetailedData = true;
       }
   },
    
});

export const { addWeatherInfo } = weatherInfoSlice.actions;

export const getWeatherInfo = (state) => state.weatherInfo.weatherInfo;

export const getWeatherInfoBool = (state) => state.hasDetailedData.hasDetailedData;

export default weatherInfoSlice.reducer;


