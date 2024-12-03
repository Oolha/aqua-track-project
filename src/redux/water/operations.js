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

export const createWaterEntry = createAsyncThunk(
  'water/createEntry',
  async (waterData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    setHeaders(token);
    try {
      const response = await instance.post('water', waterData);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const patchWaterEntry = createAsyncThunk(
  'water/patchEntry',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await instance.patch(`water/${id}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWaterEntry = createAsyncThunk(
  'water/deleteEntry',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`water/${id}`);
      return { id, message: response.data.message };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDailyWaterEntries = createAsyncThunk(
  'water/fetchDailyEntries',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('water/day');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMonthlyWaterEntries = createAsyncThunk(
  'water/fetchMonthlyEntries',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('water/month');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
