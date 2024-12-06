import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { selectWaterItems } from '../../redux/water/selectors';
import { selectUserDailyNorma } from '../../redux/auth/selectors';
import { getWaterItemsperDay, amountWaterPerDay } from '../../utils/calendar';

// import { selectDailyEntries } from '../../redux/water/selectors';

const WaterProgressBar = () => {
  const dailyNorma = useSelector(selectUserDailyNorma);

  const itemsWater = useSelector(selectWaterItems);

  const today = new Date();

  const dayWaterItem = getWaterItemsperDay(itemsWater, today);
  const amount = amountWaterPerDay(dayWaterItem);
  const waterPercent = Math.min(
    Math.round((amount / 1000 / dailyNorma) * 100),
    100
  );

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Today</p>

      <div className={`${css.scale} scale`}>
        <span
          className={css.volumeInfo}
          style={{
            left: waterPercent === 0 ? `0px` : `calc(${waterPercent}% - 12px)`,
          }}
        >
          {waterPercent}%
        </span>
        <div
          className={css.progressBar}
          style={{ width: `${waterPercent}%` }}
        ></div>
        <span
          className={css.circle}
          style={{
            left: waterPercent === 0 ? `0px` : `calc(${waterPercent}% - 12px)`,
          }}
        ></span>
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
