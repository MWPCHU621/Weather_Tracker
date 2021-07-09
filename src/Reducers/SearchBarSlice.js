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

            state.cityList.splice(0,0,action.payload);
        },

        removeCity: (state, action) => {
            console.log("REMOVE CITY DEBUG", state, action.payload.name);
            state.cityList.filter(city => city.name != action.payload.name);
        }
   },
    
});

export const { addCity, removeCity } = searchBarSlice.actions;

export const getCityList = (state) => state.cityList.cityList;

export default searchBarSlice.reducer;


