import css from "./CalendarPagination.module.css";

export const CalendarPagination = ({initialMonth,InitialYear}) => {
    const rate = Math.round(waterAmount*100/waterNorma);
    return (
        
       
        <span>
            <button>
            <svg  width="64" height="64">
                  <use href="./images/icons.svg#icon-antenna"></use>
                </svg>
            </button>
            <span>{initialMonth}</span>
            <span>{InitialYear}</span>
            <button>
            <svg  width="64" height="64">
                  <use href="./images/icons.svg#icon-antenna"></use>
                </svg>
            </button>
        </span>
        
    );
}