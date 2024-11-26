import css from './ChooseDate.module.css';
// import { useState } from 'react';

const ChooseDate = ({}) => {
  //   const [selectedDate, setSelectedDate] = useState(new Date());

  //   const handleDateChange = date => {
  //     setSelectedDate(date?.toDate() || new Date());
  //   };

  return (
    <>
      {/* <p className={css.curDate}>{selectedDate || 'Today'}</p> */}
      <p className={css.curDate}>Today</p>
    </>
  );
};

export default ChooseDate;
