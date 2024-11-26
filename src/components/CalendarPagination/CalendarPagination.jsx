import { Icon } from "../Icon/Icon";
import css from "./CalendarPagination.module.css";

export const CalendarPagination = ({initialMonth,InitialYear}) => {
   
    return (
        
       
        <span>
            <button>
            <Icon id="icon-prev_month" size={9} />
            </button>
            <span>{initialMonth}</span>
            <span>{InitialYear}</span>
            <button>
            <Icon id="icon-next_month" size={9} />
            </button>
        </span>
        
    );
}