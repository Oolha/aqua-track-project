import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('authToken') || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload;
      state.error = null;
      localStorage.setItem('authToken', action.payload); // зберігаємо токен в localStorage
    },
    loginFailure(state, action) {
      state.token = null;
      state.error = action.payload;
      localStorage.removeItem('authToken'); // очищаємо токен у localStorage
    },
    logout(state) {
      state.token = null;
      state.error = null;
      localStorage.removeItem('authToken'); // очищаємо токен у localStorage
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;