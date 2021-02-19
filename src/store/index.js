import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import dictionariesSlice from './dictionariesSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  dictionaries: dictionariesSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
