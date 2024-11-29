import { configureStore } from '@reduxjs/toolkit';
import authReduser from './slice.js';

const store = configureStore({
  reducer: {
    auth: authReduser,
  },
});

export default store;
