import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularActor: [],
  error: [],
  actorDetails: {},
  page: 1,
};

export const popularReducer = createSlice({
  name: "popular",
  initialState,
  reducers: {
    addPopularActor: (state, action) => {
      state.popularActor = action.payload;
    },
    addActorDetails: (state, action) => {
      state.actorDetails = action.payload;
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
export default popularReducer.reducer;
export const {
  adderror,
  removeerror,
  changepage,
  addPopularActor,
  addActorDetails,
} = popularReducer.actions;
