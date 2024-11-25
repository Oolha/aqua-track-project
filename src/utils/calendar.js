const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
function getPreviousMonth(initalDate,increase=true) {
    const date = new Date(initalDate);
    (increase) ? date.setMonth(date.getMonth() + 1):date.setMonth(date.getMonth() - 1)
    const year = date.getFullYear();
    const monthName = monthNames[date.getMonth()]; // Отримуємо назву місяця

  return { year, monthName, date };
    
}

console.log(getPreviousMonth(new Date(),false))