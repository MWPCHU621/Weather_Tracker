import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cityListReducer from '../Reducers/SearchBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cityList: cityListReducer,
  },
});
