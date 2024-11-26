const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
export function getPreviousMonth(initalDate,increase=true) {
    const date = new Date(initalDate);
    (increase) ? date.setMonth(date.getMonth() + 1):date.setMonth(date.getMonth() - 1)
    const year = date.getFullYear();
    const monthName = monthNames[date.getMonth()]; 

  return { year, monthName, date };
    
}

export  function getDaysInMonthFromDate(initialDate) {
  
  const date = new Date(initialDate);

 
  const year = date.getFullYear();
  const month = date.getMonth() + 1; 

  
  return new Date(year, month, 0).getDate();
}

