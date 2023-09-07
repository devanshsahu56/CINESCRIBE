import axios from "axios";
import {
  addPopularActor,
  adderror,
  addActorDetails
} from "../Reducers/popularReducer";

export const asyncPopularActors = () => async (dispatch, getState) => {
  try {
    const { page } = getState().popularReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
    );
    dispatch(addPopularActor(data));
  } catch (error) {
    console.log(error)
  }
};
export const asyncActordetails = (Id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${Id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
    );
    dispatch(addActorDetails(data));
  } catch (error) {
    console.log(error)
  }
};
