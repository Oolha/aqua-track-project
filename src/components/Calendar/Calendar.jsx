import { useSelector } from 'react-redux';
import {selectWaterItems} from '../../redux/water/selectors.js'
import { CalendarItem } from '../CalendarItem/CalendarItem';
import { getDaysInMonthFromDate, getWaterItemsperDay,amountWaterPerDay } from '../../utils/calendar';
import {selectCurrentDate} from '../../redux/date/selectors.js'
import css from './Calendar.module.css';




export const Calendar = () => {
  const initialDate = useSelector(selectCurrentDate);
  // const norma=useSelector(state=>state.user.norma);
  const norma=1500;
  const waterData = useSelector(selectWaterItems);
  const date = new Date(initialDate);
  const month = date.getMonth();
  const year = date.getFullYear();
  const amountDays = getDaysInMonthFromDate(date);
  const dayItems = [];
  for (let day = 1; day <= amountDays; day++) {
    let id = parseInt(day.toString() + month.toString() + year.toString());
    const currentDate = new Date(year, month, day);
   
    const waterItemsperDay = getWaterItemsperDay(waterData,currentDate);
    console.log(waterItemsperDay);
    const amount=amountWaterPerDay(waterItemsperDay);

    dayItems.push(
      <li key={id}>

        <CalendarItem
          initialDay={day}
          waterNorma={norma}
          waterAmount={amount}
        />
      </li>
    );
  }

  return <ul className={css.calendar}>{dayItems}</ul>;
};
