export const selectCurrentDate= (state) => state.date.currDate;
export const selectActiveDay = (state) =>state.date.activeDay;
const date = new Date(selectCurrentDate);
  
export const selectCurrentMonth = date.getMonth();