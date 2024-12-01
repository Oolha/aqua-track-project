import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://aqua-track-project-back.onrender.com/',
});

const setHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetHeaders = () => {
  instance.defaults.headers.common.Authorization = '';
};
export const fetchSignUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('auth/register', userData);

      const { accessToken, user } = response.data;
      setHeaders(accessToken);
      return { user, accessToken };
    } catch (e) {
      const errorMessage =
        e.response?.data?.message || e.message || 'Signup failed';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const fetchSignIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('auth/login', userData);

      const { accessToken, user } = response.data.data;
      setHeaders(accessToken);
      return { user, accessToken };
    } catch (e) {
      const errorMessage =
        e.response?.data?.message || e.message || 'Login failed';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const fetchLogOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await instance.post('auth/logout');

      resetHeaders();
      return response.data;
    } catch (e) {
      const errorMessage =
        e.response?.data?.message || e.message || 'Logout failed';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    const BASE_URL = 'https://aqua-track-project-back.onrender.com';
    const END_POINT = '/auth/refresh';
    const url = BASE_URL + END_POINT;
    
    try {
      setHeaders(persistedToken);
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }    






    
  }
);
