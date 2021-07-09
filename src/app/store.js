import { configureStore } from '@reduxjs/toolkit';
import cityListReducer from '../Reducers/SearchBarSlice';

export const store = configureStore({
  reducer: {
    cityList: cityListReducer,
  },
});
