import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Today</p>
      <div className={css.scale}></div>
      <ul className={css.listPercent}>
        <li className={css.itemPercent}>0%</li>
        <li className={css.itemPercent}>50%</li>
        <li className={css.itemPercent}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
