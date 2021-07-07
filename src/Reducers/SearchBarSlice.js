import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState= {
    cityList:[],
};


export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,

   reducers: {
       addCity: (state, action) => {
        fetch("api.openweathermap.org/data/2.5/weather?q={action.payload}&appid={c51223c219d6aec8cb8c5210449bd859}")
            .then(
                (result) => {
                    console.log("GOOD", result);
                },
                (error) => {
                    console.log("ERROR", error);
                }
            )
       },
   }
    
});

export const { addCity } = searchBarSlice.actions;

export const getCityList = (state) => state.cityList.value;

export default searchBarSlice.reducer;


