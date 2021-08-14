import { configureStore } from '@reduxjs/toolkit';
import WeatherInfoReducer from '../Reducers/WeatherInfoSlice';

export const store = configureStore({
  reducer: {
    weatherInfo: WeatherInfoReducer,
    hasDetailedData:WeatherInfoReducer,
  },
});