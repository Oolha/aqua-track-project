import { createSlice } from '@reduxjs/toolkit';
import {
  createWaterEntry,
  fetchDailyWaterEntries,
  patchWaterEntry,
  fetchMonthlyWaterEntries,
  deleteWaterEntry,
} from './operations';
const initialState = {
  dailyEntries: [],
  monthlyStats: {},
  waterAmount: 0,
  isLoading: false,
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createWaterEntry.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.dailyEntries.push(action.payload.data);
        state.waterAmount = action.payload.water;
      })
      .addCase(fetchDailyWaterEntries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.dailyEntries = action.payload.data;
        state.waterAmount = action.payload.water;
      })
      .addCase(fetchMonthlyWaterEntries.fulfilled, (state, action) => {
        state.monthlyStats = action.payload.data;
      })
      .addCase(patchWaterEntry.fulfilled, (state, action) => {
        const updatedEntry = action.payload.data;
        state.dailyEntries = state.dailyEntries.map((entry) =>
          entry._id === updatedEntry._id ? updatedEntry : entry
        );
      })
      .addCase(deleteWaterEntry.fulfilled, (state, action) => {
        state.dailyEntries = state.dailyEntries.filter(
          (entry) => entry._id !== action.payload.id
        );
      })
      .addCase(createWaterEntry.pending, handlePending)
      .addCase(createWaterEntry.rejected, handleRejected)
      .addCase(fetchDailyWaterEntries.pending, handlePending)
      .addCase(fetchDailyWaterEntries.rejected, handleRejected)
      .addCase(fetchMonthlyWaterEntries.pending, handlePending)
      .addCase(fetchMonthlyWaterEntries.rejected, handleRejected)
      .addCase(patchWaterEntry.pending, handlePending)
      .addCase(patchWaterEntry.rejected, handleRejected)
      .addCase(deleteWaterEntry.pending, handlePending)
      .addCase(deleteWaterEntry.rejected, handleRejected);
  },
});

export default waterSlice.reducer;
