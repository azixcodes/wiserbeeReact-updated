import { configureStore } from "@reduxjs/toolkit";

import parentReducer from "../redux/ParentSlice";
import toggleSlice from "../redux/ToggleSlice";

export const store = configureStore({
  reducer: {
    parent: parentReducer,
    toggler: toggleSlice,
  },
});
