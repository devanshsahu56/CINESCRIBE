import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularTV: [],
  topRated: [],
  airToday: [],
  onTheAir: [],
  page: 1,
  error: [],
  tvDetail: {},
  trendingTv: [],
};

export const tvshowReducer = createSlice({
  name: "tvshow",
  initialState,
  reducers: {
    addPopularTV: (state, action) => {
      state.popularTV = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addTrendingTV: (state, action) => {
      state.trendingTv = action.payload;
    },
    addTVdetails: (state, action) => {
      state.tvDetail = action.payload;
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

export default tvshowReducer.reducer;
export const {
  addPopularTV,
  adderror,
  removeerror,
  changepage,
  addTopRated,
  addAiringToday,
  addOnTheAir,
  addTVdetails,
  addTrendingTV,
} = tvshowReducer.actions;
