import css from './CalendarItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeActiveDay,changeDate } from "../../redux/date/slice.js";
import {selectActiveDay,selectCurrentDate}  from '../../redux/date/selectors.js'
import clsx from "clsx";


export const CalendarItem = ({ initialDay, waterNorma=1500, waterAmount=0 }) => {
  const activeDay = useSelector(selectActiveDay);
  const serialazedDate = useSelector(selectCurrentDate);
  const currentDate= new Date(serialazedDate);
  const currentMonth=currentDate.getMonth();
  const currentYear=currentDate.getFullYear();
  const clickedDate = (year, month, day)=>{
    const date= new Date(year, month, day)
  return date.toISOString();
  }
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeActiveDay(initialDay));
    
    dispatch(changeDate(clickedDate(currentYear,currentMonth,initialDay)))
  };
  const rate = Math.round((waterAmount * 100) / (waterNorma*1000));
  
  const isOutstanding = (rate<100) ? true : false;
  const isActive = (activeDay===initialDay) ? true : false;

  return (
    <button type="button" className={css.button} onClick={handleClick}>
      <span className={clsx(css.day,  isOutstanding&&css.outstanding, isActive&&css.active )}>{initialDay}</span>
      <span className={css.rate}>{rate}%</span>
    </button>
  );
};