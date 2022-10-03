import { createReducer } from '@reduxjs/toolkit';
import { setLanguage, setUserLoading, setUserName } from './actions';
import { getUserLanguage } from './utils';

const initialState = {
  language: getUserLanguage(),
  user: { name: '', isLoaded: false },
};

const appDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLanguage, (state, action) => {
      state.language = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.user.name = action.payload;
    })
    .addCase(setUserLoading, (state, action) => {
      state.user.isLoaded = action.payload;
    });
});

export default appDataReducer;
