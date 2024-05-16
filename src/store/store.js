import { configureStore } from "@reduxjs/toolkit";

import parentReducer from "../redux/ParentSlice";

export const store = configureStore({
  reducer: {
    parent: parentReducer,
  },
});
