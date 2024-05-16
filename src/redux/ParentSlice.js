import { createSlice } from "@reduxjs/toolkit";
import { users as usersAnalytics } from "../Constant/users";

const initialState = {
  users: usersAnalytics,
};

export const parentSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = state.users.map((us, index) => ({
        ...us,
        isActive: index === action.payload,
      }));
    },
  },
});

export const { setUser } = parentSlice.actions;

export default parentSlice.reducer;
