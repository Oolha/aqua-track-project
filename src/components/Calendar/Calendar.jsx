import { CalendarItem } from "../CalendarItem/CalendarItem";
import { getDaysInMonthFromDate } from "../../utils/calendar";

export const Calendar = ({initialDate}) => {

    const date = new Date(initialDate);
    const month= date.getMonth();
    const year = date.getFullYear();
    const amountDays = getDaysInMonthFromDate(date)
    const dayItems=[];
    for (let day = 1; day <= amountDays; day++) {
        let id= parseInt((day.toString()+month.toString()+year.toString()))
       
       dayItems.push(
        <li key={id}> <CalendarItem initialDay={day} waterNorma={1000} waterAmount={1000}/> </li>
       )
        
    }


    return (
        <ul>
            {dayItems}

        </ul>
    );
}