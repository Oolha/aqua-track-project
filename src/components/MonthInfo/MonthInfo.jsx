import { CalendarPagination } from '../CalendarPagination/CalendarPagination.jsx';
import Icons from '../../assets/icons/sprite.svg';

import { getMonthName } from '../../utils/calendar.js';
import css from './MonthInfo.module.css';
import {Calendar} from '../../components/Calendar/Calendar.jsx'

export const MonthInfo = ({}) => {
  const currentDate = new Date();
  const currentMonth = getMonthName(currentDate);
  const currentYear = currentDate.getFullYear();

  return (
    <section className={`${css.monthInfo} monthInfo`}>
      <div className={css.wrapper}>
      <h2 className={css.monthInfoHeader}>Month</h2>
      <span className={css.pagination}>
        <CalendarPagination
          initialMonth={currentMonth}
          InitialYear={currentYear}
        />
      </span>
      <button type="button">
        
        <svg className={css.iconStat}>
          <use href={Icons + '#icon-statistics'} ></use>
        </svg>
      </button>
      
      </div>
      <Calendar/>
    </section>
  );
};
