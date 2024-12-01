import { fetchLogOut, fetchSignIn, fetchSignUp,refreshUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
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
      .addCase(fetchLogOut.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
