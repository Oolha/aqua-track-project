// import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
// import { selectUserDailyNorma } from '../../redux/auth/selectors';
// import { selectDailyEntries } from '../../redux/water/selectors';

const WaterProgressBar = () => {
  // const dailyNorma = useSelector(selectUserDailyNorma);
  // const waterAmount = useSelector(selectDailyEntries);

  // const waterPercent = Math.min(Math.round((waterAmount / dailyNorma) * 100), 100);

  const progressStyle = {
    left: 'calc(70% - 12px)',
    transform: 'translateY(-calc(70% - 12px)',
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Today</p>

      <div className={css.scale}>
        <span className={css.volumeInfo} style={progressStyle}>
          70%
        </span>
        <div className={css.progressBar} style={{ width: `70%` }}></div>
        <span className={css.circle} style={progressStyle}></span>
      </div>
      <ul className={css.listPercent}>
        <li className={css.itemPercent}>0%</li>
        <li className={css.itemPercent}>50%</li>
        <li className={css.itemPercent}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
