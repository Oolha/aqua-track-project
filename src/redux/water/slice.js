import { createSlice } from '@reduxjs/toolkit';
import {
  createWaterEntry,
  patchWaterEntry,
  fetchMonthlyWaterEntries,
  deleteWaterEntry,
} from './operations';

const initialState = {
  items: [],
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
const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createWaterEntry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload.data);
      })
      .addCase(fetchMonthlyWaterEntries.fulfilled, (state, { payload }) => {
        state.items = payload.data;
      })
      .addCase(patchWaterEntry.fulfilled, (state, { payload }) => {
        const updatedEntry = payload.data;
        state.dailyEntries = state.dailyEntries.map((entry) =>
          entry._id === updatedEntry._id ? updatedEntry : entry
        );
      })
      .addCase(deleteWaterEntry.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((item) => item._id !== payload.id);
      })
      .addCase(createWaterEntry.pending, handlePending)
      .addCase(createWaterEntry.rejected, handleRejected)
      .addCase(fetchMonthlyWaterEntries.pending, handlePending)
      .addCase(fetchMonthlyWaterEntries.rejected, handleRejected)
      .addCase(patchWaterEntry.pending, handlePending)
      .addCase(patchWaterEntry.rejected, handleRejected)
      .addCase(deleteWaterEntry.pending, handlePending)
      .addCase(deleteWaterEntry.rejected, handleRejected);
  },
});

export default waterSlice.reducer;
