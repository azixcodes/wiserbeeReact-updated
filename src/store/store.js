import { configureStore } from "@reduxjs/toolkit";
import i18n from "../i18n";

import parentReducer from "../redux/ParentSlice";
import toggleSlice from "../redux/ToggleSlice";
import userSlice from "../redux/UserSlice";
import languageSlice from "../redux/languageSlice";
import adminCredSlice from "../redux/adminCredSlice";

export const store = configureStore({
  reducer: {
    parent: parentReducer,
    toggler: toggleSlice,
    user: userSlice,
    language: languageSlice,
    admincredslice: adminCredSlice,
  },
});

let previousLanguageCode = store.getState().language.code;

store.subscribe(() => {
  const state = store.getState();
  const currentLanguageCode = state.language.code;

  if (previousLanguageCode !== currentLanguageCode) {
    i18n.changeLanguage(currentLanguageCode);
    previousLanguageCode = currentLanguageCode; 
  }
});
