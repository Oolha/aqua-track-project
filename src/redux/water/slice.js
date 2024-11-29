import { createSlice } from '@reduxjs/toolkit';
import { createWaterEntry, fetchDailyWaterEntries } from './operations';
const initialState = {
  isLoading: false,
  error: null,
  waterEntries: [],
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
        state.waterEntries.push(payload);
      })

      .addCase(createWaterEntry.pending, handlePending)
      .addCase(createWaterEntry.rejected, handleRejected)
      .addCase(fetchDailyWaterEntries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.waterEntries = payload;
      })
      .addCase(fetchDailyWaterEntries.pending, handlePending)
      .addCase(fetchDailyWaterEntries.rejected, handleRejected);
  },
});

export default waterSlice.reducer;
