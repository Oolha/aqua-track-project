import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createWaterEntry = createAsyncThunk(
  'water/createEntry',
  async (waterData, thunkAPI) => {
    const BASE_URL = 'https://aqua-track-project-back.onrender.com/water';
    try {
      const response = await axios.post(BASE_URL, waterData);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDailyWaterEntries = createAsyncThunk(
  'water/fetchDailyEntries',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://aqua-track-project-back.onrender.com/water/daily'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
