// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   code: 'US',
//   language: 'English',
// };

// const languageSlice = createSlice({
//   name: 'language',
//   initialState,
//   reducers: {
//     setLanguage: (state, action) => {
//       state.code = action.payload.code;
//       state.language = action.payload.language;
//     },
//   },
// });

// export const { setLanguage } = languageSlice.actions;
// export default languageSlice.reducer;

// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: localStorage.getItem('selectedLanguageCode') || 'US', // Read from local storage
  language: localStorage.getItem('selectedLanguage') || 'English', // Read from local storage
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.code = action.payload.code;
      state.language = action.payload.language;
      localStorage.setItem('selectedLanguageCode', action.payload.code);
      localStorage.setItem('selectedLanguage', action.payload.language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
