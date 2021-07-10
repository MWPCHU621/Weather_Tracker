import { configureStore } from '@reduxjs/toolkit';
import cityListReducer from '../Reducers/CityListSlice';
import WeatherInfoReducer from '../Reducers/WeatherInfoSlice';

export const store = configureStore({
  reducer: {
    cities: cityListReducer,
    weatherInfo: WeatherInfoReducer,
    hasDetailedData:WeatherInfoReducer,
  },
});