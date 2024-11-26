// import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  // const { currentAmount, dailyGoal } = useSelector();

  // const waterPercent = Math.round((currentAmount / dailyGoal) * 100);

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Today</p>
      {/* <div className={css.wrapperProgressBar}>
        <div className={css.progressBar}></div>
        <span className={css.volumeInfo}>{waterPercent} %</span>
      </div> */}
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
