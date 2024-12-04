import css from './CalendarItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeActiveDay } from "../../redux/date/slice.js";
import {selectActiveDay}  from '../../redux/date/selectors.js'
import clsx from "clsx";


export const CalendarItem = ({ initialDay, waterNorma=1500, waterAmount=0 }) => {
  const activeDay = useSelector(selectActiveDay);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeActiveDay(initialDay))
  };
  const rate = Math.round((waterAmount * 100) / waterNorma);
  
  const isOutstanding = (rate<100) ? true : false;
  const isActive = (activeDay===initialDay) ? true : false;

  return (
    <button type="button" className={css.button} onClick={handleClick}>
      <span className={clsx(css.day,  isOutstanding&&css.outstanding, isActive&&css.active )}>{initialDay}</span>
      <span className={css.rate}>{rate}%</span>
    </button>
  );
};