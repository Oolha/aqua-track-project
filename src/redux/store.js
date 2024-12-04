import { configureStore } from '@reduxjs/toolkit';
import waterReducer from './water/slice.js';
import authReducer from './auth/slice';
import dateReducer from './date/slice.js'

export const store = configureStore({
  reducer: {
    water: waterReducer,
    auth: authReducer,
    date: dateReducer,
  },
});
