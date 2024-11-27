import { CalendarItem } from '../CalendarItem/CalendarItem';
import { getDaysInMonthFromDate } from '../../utils/calendar';
import css from './Calendar.module.css';
const currentDate = new Date();
export const Calendar = ({ initialDate=currentDate }) => {
  const date = new Date(initialDate);
  const month = date.getMonth();
  const year = date.getFullYear();
  const amountDays = getDaysInMonthFromDate(date);
  const dayItems = [];
  for (let day = 1; day <= amountDays; day++) {
    let id = parseInt(day.toString() + month.toString() + year.toString());

    dayItems.push(
      <li key={id}>
        {' '}
        <CalendarItem
          initialDay={day}
          waterNorma={1000}
          waterAmount={1000}
        />{' '}
      </li>
    );
  }

  return <ul className={css.calendar}>{dayItems}</ul>;
};
