import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/store/Reducers/movieReducer";
import tvshowReducer from "@/store/Reducers/tvshowReducer";
import popularReducer from "@/store/Reducers/popularReducer";

export const store = configureStore({
  reducer: {
    movieReducer,
    tvshowReducer,
    popularReducer,
  },
});
