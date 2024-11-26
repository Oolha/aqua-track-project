import Icons from '../../assets/icons/sprite.svg';

import css from './CalendarPagination.module.css';

export const CalendarPagination = ({ initialMonth, InitialYear }) => {
  return (
    <span className={css.calendarPag}>
      <button type="button" className={css.buttonPrev}>
      <svg className={css.iconArrow}>
          <use href={Icons + '#icon-prev_month'} ></use>
        </svg>
       
      </button>
      <span>{initialMonth}, </span>
      <span className={css.yearField}>{InitialYear}</span>
      <button type="button" className={css.buttonArrow}>
      <svg className={css.iconArrow}>
          <use href={Icons + '#icon-next_month'} ></use>
        </svg>
        
      </button>
    </span>
  );
};
