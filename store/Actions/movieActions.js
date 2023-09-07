import axios from "axios";
import {
  addmovies,
  addMoviedetails,
  adderror,
  trending,
  addnowplaying,
  addUpcoming,
  addTopRated
} from "../Reducers/movieReducer";

export const asyncaddmovies = () => async (dispatch, getState) => {
  try {
    const { page } = getState().movieReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addmovies(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};
export const asyncNowPlaying = () => async (dispatch, getState) => {
  try {
    const { page } = getState().movieReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addnowplaying(data.results));
  } catch (error) {
    // dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};
export const asyncTrending = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=223667d1239871fc4b6eeef8d0d6def8'
    );
    dispatch(trending(data.results));
  } catch (error) {
    // dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};
export const asyncMovieDetails = (Id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${Id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
    );
    dispatch(addMoviedetails(data));
  } catch (error) {
    // dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};
export const aysncUpcoming = () => async (dispatch, getState) => {
  try {
    const { page } = getState().movieReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addUpcoming(data.results));
  } catch (error) {
    // dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};
export const asyncTopRated = () => async (dispatch, getState) => {
  try {
    const { page } = getState().movieReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addTopRated(data.results));
  } catch (error) {
    // dispatch(adderror(error.response.data.status_message));
    console.log(error);
  }
};