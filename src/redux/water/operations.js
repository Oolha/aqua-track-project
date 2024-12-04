import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations.js';

// export const instance = axios.create({
//   baseURL: 'https://aqua-track-project-back.onrender.com/',
// });
// instance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const createWaterEntry = createAsyncThunk(
  'water/createEntry',
  async (waterData, thunkAPI) => {
    try {
      const formattedData = {
        ...waterData,
        date: new Date(waterData.date)
          .toISOString()
          .slice(0, 16)
          .replace('T', ' '),
      };
      const response = await instance.post('water', formattedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || e.message || 'Failed to create water entry'
      );
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

export const fetchMonthlyWaterEntries = createAsyncThunk(
  'water/fetchMonthlyEntries',
  async (date, thunkAPI) => {
    try {
      const response = await instance.get('water/month', {
        params: { ...date },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
