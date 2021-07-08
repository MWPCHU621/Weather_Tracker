import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState= {
    cityList:[],
};


export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,

   reducers: {
       addCity: (state, action) => {
            if(state.cityList.length >= 8) {
                state.cityList.pop();
            }

            state.cityList.push(action.payload);
        }
   },
    
});

export const { addCity } = searchBarSlice.actions;

export const getCityList = (state) => state.cityList.value;

export default searchBarSlice.reducer;


