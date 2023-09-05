import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    MovieDetails: {},
    page:1,
    error:[],
};


export const movieReducer = createSlice({
    name:"Movies",
    initialState,
    reducers:{
        addmovies:(state, action)=>{
            state.movies = action.payload;
        },
        saveMoviedetails:(state, action)=>{
            state.MovieDetails = action.payload;
        },
        adderror:(state, action)=>{
            state.error.push(action.payload);
        },
        removeerror:(state, action)=>{
            state.error=[];
        },
        changepage:(state, action)=>{
            state.page += action.payload;
        },
    }
})
export default movieReducer.reducer;
export const { addmovies, adderror, removeerror, changepage, saveMoviedetails} = movieReducer.actions;