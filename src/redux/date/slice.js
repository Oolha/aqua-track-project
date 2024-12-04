import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();
const slice = createSlice({
  name: 'date',

  initialState: {
    currDate: currentDate.toISOString(),
    activeDay: currentDate.getDate(),
  },

  reducers: {
    changeDate: (state, action) => {
      return {
        ...state,
        currDate: action.payload,
      };
    },
    changeActiveDay: (state, action) => {
      return {
        ...state,
        activeDay: action.payload,
      };
    },
  },
});

export const { changeDate, changeActiveDay } = slice.actions;

export default slice.reducer;