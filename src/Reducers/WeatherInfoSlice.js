import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    weatherInfo: {},
};


export const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState,

   reducers: {
       addWeatherInfo: (state, action) => {
           state.weatherInfo = action.payload;
       }
   },
    
});

export const { addWeatherInfo } = weatherInfoSlice.actions;

export const getWeatherInfo = (state) => state.weatherInfo.value;

export default weatherInfoSlice.reducer;


