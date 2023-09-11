// import { apiSlice } from '../login/Slice'
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slice";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default Store;
