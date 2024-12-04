const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export function changeMonth(initalDate, increase = true) {
  const date = new Date(initalDate);
  increase
    ? date.setMonth(date.getMonth() + 1)
    : date.setMonth(date.getMonth() - 1);
  const year = date.getFullYear();
  const monthName = monthNames[date.getMonth()];

  return { year, monthName, date };
}

export function getDaysInMonthFromDate(initialDate) {
  const date = new Date(initialDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return new Date(year, month, 0).getDate();
}

export function getMonthName(date) {
  return monthNames[date.getMonth()];
}

export function getWaterItemsperDay(waterData, initialDate) {
  const waterItemsperDay = [];

  waterData.forEach((item) => {
    let createdAtField = item.date;
    

    const date = new Date(createdAtField);
    

    if (
      date.getDate() === initialDate.getDate() &&
      date.getMonth() === initialDate.getMonth() &&
      date.getFullYear() === initialDate.getFullYear()
    ) {
      waterItemsperDay.push(item);
    }
  });
  return waterItemsperDay;
}

export function amountWaterPerDay(waterItems) {
  return waterItems.reduce((acc, item) => {
    let amountField = item.volume;
   
    acc += amountField;
    return acc;
  }, 0);
}

export function parseDate(initialDate) {
  const  date = new Date(initialDate);
  const month= date.getMonth()+1;
  const year = date.getFullYear();
  return `${year}-${month}`
}
