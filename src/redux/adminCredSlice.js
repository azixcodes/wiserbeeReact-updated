import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

export const adminAuthSlice = createSlice({
  name: "admincredslice",
  initialState,
  reducers: {
    getUserName: (state, action) => {
      //   console.log(action.payload);
      state.username = action.payload;
    },
    getPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const { getUserName, getPassword } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
