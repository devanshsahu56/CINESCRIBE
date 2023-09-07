import axios from "axios";
import {
  addPopularTV,
  adderror,
  addTopRated,
  addAiringToday,
  addOnTheAir,
  addTVdetails,
  addTrendingTV
} from "../Reducers/tvshowReducer";

export const asyncPopularTvShow = () => async (dispatch, getState) => {
  try {
    const { page } = getState().tvshowReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addPopularTV(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
export const asyncTopRated = () => async (dispatch, getState) => {
  try {
    const { page } = getState().tvshowReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addTopRated(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
export const asyncAiringToday = () => async (dispatch, getState) => {
  try {
    const { page } = getState().tvshowReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addAiringToday(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
export const asyncOnTheAir = () => async (dispatch, getState) => {
  try {
    const { page } = getState().tvshowReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addOnTheAir(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
export const asyncTVdetails = (Id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${Id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
    );
    dispatch(addTVdetails(data));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
export const asyncTrendingTV = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=223667d1239871fc4b6eeef8d0d6def8"
    );
    dispatch(addTrendingTV(data.results));
  } catch (error) {
    dispatch(adderror(error.response.data.status_message));
  }
};
