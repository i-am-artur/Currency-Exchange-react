import { createAction } from '@reduxjs/toolkit';

export const setLanguage = createAction<string>('setLanguage');
export const setUserName = createAction<string>('setUserName');
export const setUserLoading = createAction<boolean>('setUserLoading');
