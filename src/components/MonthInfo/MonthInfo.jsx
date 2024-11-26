import { CalendarPagination } from "../CalendarPagination/CalendarPagination.jsx";
import { Icon } from "../Icon/Icon";
import css from "./MonthInfo.module.css";


export const MonthInfo = ({}) => {

    

    return (
        <section className={css.monthInfo}>
            <h2 className={css.monthInfoHeader}>Month</h2>
            <CalendarPagination/>
            <button type="button"><Icon id="icon-statistics" size={13}/></button>
            

        </section>
    );
}