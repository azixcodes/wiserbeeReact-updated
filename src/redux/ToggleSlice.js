import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSidebar: false,
  toggleFilter: false,
};

export const toggleSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    setToggleSidebar: (state, action) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    setToggleFilter: (state, action) => {
      state.toggleFilter = !state.toggleFilter;
    },
  },
});

export const { setToggleSidebar, setToggleFilter } = toggleSlice.actions;

export default toggleSlice.reducer;
