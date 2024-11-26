import { Icon } from "../Icon/Icon";

import css from "./CalendarPagination.module.css";

export const CalendarPagination = ({initialMonth,InitialYear}) => {

    return (


        <span className={css.calendarPag}>
            <button type="button" className={css.buttonPrev}>
            <Icon id="icon-prev_month" size={9} />
            </button>
            <span>{initialMonth}, </span>
            <span className={css.yearField}>{InitialYear}</span>
            <button type="button" >
            <Icon id="icon-next_month" size={9} />
            </button>
        </span>

    );
}