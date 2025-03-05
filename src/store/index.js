import { configureStore } from "@reduxjs/toolkit";
import memoSlice from "./memoSlice";

const store = configureStore({
  reducer: {
    memo: memoSlice.reducer,
  },
});

export default store;
