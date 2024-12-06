import { createSlice } from '@reduxjs/toolkit';

const parseDate = (date) => {
  const pad = (n) => String(n).padStart(2, '0');

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const currentDate = new Date();
const slice = createSlice({
  name: 'date',

  initialState: {
    currDate: currentDate.toISOString(),
    formattedCurrDate: parseDate(currentDate),
    activeDay: currentDate.getDate(),
  },

  reducers: {
    changeDate: (state, action) => {
      return {
        ...state,
        currDate: action.payload,
        formattedCurrDate: parseDate(new Date(action.payload)),
      };
    },
    changeActiveDay: (state, action) => {
      return {
        ...state,
        activeDay: action.payload,
        formattedCurrDate: parseDate(new Date(action.payload)),
      };
    },
  },
});

export const { changeDate, changeActiveDay } = slice.actions;

export default slice.reducer;
