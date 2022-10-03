import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currenciesReducer from './currencies/reducer';
import appDataReducer from './appData/reducer';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  appData: appDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function initStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
}

export default initStore();

export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
