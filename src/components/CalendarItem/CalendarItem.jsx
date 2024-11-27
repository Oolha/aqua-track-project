import css from './CalendarItem.module.css';


export const CalendarItem = ({ initialDay, waterNorma, waterAmount }) => {
  const rate = Math.round((waterAmount * 100) / waterNorma);
  return (
    <button type="button" className={css.button}>
      <span className={css.day}>{initialDay}</span>
      <span className={css.rate}>{rate}%</span>
    </button>
  );
};
