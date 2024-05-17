import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    user: "Jennifer Markus",
    tag: "Parent",
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    lastMessage:
      "Hey! Did you finish Hi-Fi wireframes for flora app design so it could be us then now and may be this one will fix it",
    timestamp: "30 mints ago",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
