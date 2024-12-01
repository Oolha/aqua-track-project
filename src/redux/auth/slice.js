import { fetchLogOut, fetchSignIn, fetchSignUp } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  token: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(fetchSignIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogOut.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchSignUp.pending, handlePending)
      .addCase(fetchSignUp.rejected, handleRejected)
      .addCase(fetchSignIn.pending, handlePending)
      .addCase(fetchSignIn.rejected, handleRejected)
      .addCase(fetchLogOut.pending, handlePending)
      .addCase(fetchLogOut.rejected, handleRejected);
  },
});

export default authSlice.reducer;
