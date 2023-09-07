import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  page: 1,
  error: [],
  trendingMovies: [],
  nowplaying: [],
  upcomingMovies: [],
  topRated: [],
  movieDetails:{}
};

export const movieReducer = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addmovies: (state, action) => {
      state.movies = action.payload;
    },
    addMoviedetails:(state, action) => {
      state.movieDetails = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    trending: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addnowplaying: (state, action) => {
      state.nowplaying = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    adderror: (state, action) => {
      state.error.push(action.payload);
    },
    removeerror: (state, action) => {
      state.error = [];
    },
    changepage: (state, action) => {
      state.page = action.payload;
    },
  },
});
export default movieReducer.reducer;
export const {
  addmovies,
  adderror,
  removeerror,
  changepage,
  trending,
  addnowplaying,
  addUpcoming,
  addTopRated,
  addMoviedetails
} = movieReducer.actions;
