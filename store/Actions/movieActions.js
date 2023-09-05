import axios from "axios";
import {
  addmovies,
  saveMoviedetails,
  adderror,
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

export const asyncGetMovieDetails = (Id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${Id}?api_key=223667d1239871fc4b6eeef8d0d6def8&page&append_to_response=videos`
    );
    dispatch(saveMoviedetails(data))
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
