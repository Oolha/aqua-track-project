import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetHeaders = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const fetchSignUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://aqua-track-project-back.onrender.com';
    const END_POINT = '/auth/register';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      const { accessToken, user } = response.data.data;
      setHeaders(accessToken);
      return { user, accessToken };
    } catch (e) {
      console.error('Signup Error:', e.response?.data);
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
export const fetchSignIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://aqua-track-project-back.onrender.com';
    const END_POINT = '/auth/login';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      const { accessToken, user } = response.data;
      setHeaders(accessToken);
      return { user, accessToken };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);

export const fetchLogOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    const BASE_URL = 'https://aqua-track-project-back.onrender.com';
    const END_POINT = '/auth/logout';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url);
      resetHeaders();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
