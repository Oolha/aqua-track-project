import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeDate } from "../../redux/date/slice.js";
import {getMonthName,changeMonth} from '../../utils/calendar.js'
import {selectCurrentDate} from '../../redux/date/selectors.js'


import Icons from '../../assets/icons/sprite.svg';

import css from './CalendarPagination.module.css';

export const CalendarPagination = () => {
  const serializedDate = useSelector(selectCurrentDate);
  const initialDate = new Date(serializedDate)

  const dispatch = useDispatch();
  const handlePrev = () => {
    const newDate = changeMonth(initialDate,false)


	  dispatch(changeDate(newDate.date.toISOString()))
  };

  const handleNext = () => {
   const newDate = changeMonth(initialDate,true)


	  dispatch(changeDate(newDate.date.toISOString()))
  };

  const initialMonth =  getMonthName(initialDate);
  const initialYear = initialDate.getFullYear();
  return (
    <span className={css.calendarPag}>
      <button type="button" className={css.buttonPrev} onClick={handlePrev}>
      <svg className={css.iconArrow}>
          <use href={Icons + '#icon-prev_month'} ></use>
        </svg>

      </button>
      <span>{initialMonth}, </span>
      <span className={css.yearField}>{initialYear}</span>
      <button type="button" className={css.buttonArrow} onClick={handleNext}>
      <svg className={css.iconArrow}>
          <use href={Icons + '#icon-next_month'} ></use>
        </svg>

      </button>
    </span>
  );
};
