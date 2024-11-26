import { CalendarPagination } from "../CalendarPagination/CalendarPagination.jsx";
import { Icon } from "../Icon/Icon";
import {getMonthName} from '../../utils/calendar.js'
import css from "./MonthInfo.module.css";


export const MonthInfo = ({}) => {
const currentDate= new Date();
const currentMonth = getMonthName(currentDate);
console.log(currentMonth)
const currentYear = currentDate.getFullYear();



    return (
        <section className={css.monthInfo}>
            <h2 className={css.monthInfoHeader}>Month</h2>
            <span className={css.pagination}>
            <CalendarPagination
             initialMonth={currentMonth}
             InitialYear={currentYear}/>
            </span>
            <button type="button"><Icon id="icon-statistics" size={13}/></button>


        </section>
    );
}