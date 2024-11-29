import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.token = null;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
