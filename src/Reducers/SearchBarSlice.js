import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState= {
    cityList:[],
};


export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,

   reducers: {
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

        removeCity: (state, action) => {
            state = action.payload;
        }
   },
    
});

export const { addCity, removeCity } = searchBarSlice.actions;

export const getCityList = (state) => state.cityList.cityList;

export default searchBarSlice.reducer;


