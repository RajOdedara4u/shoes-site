import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slices/Slice";
const store = configureStore({
  reducer: {
    product: Slice.reducer,
  },
});

export default store;
