import { useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { selectWaterItems } from '../../redux/water/selectors.js';
import { selectCurrentDate } from '../../redux/date/selectors.js';
import { getWaterItemsperDay } from '../../utils/calendar.js';
import { useMemo } from 'react';

const WaterList = () => {
  const waterData = useSelector(selectWaterItems);
  const serializedDate = useSelector(selectCurrentDate);
  const currentDate = new Date(serializedDate);

  const waterItemsperDay = useMemo(() => {
    return getWaterItemsperDay(waterData, currentDate);
  }, [waterData, currentDate]);

  const listClassName = `${css.list} ${
    waterItemsperDay.length > 3 ? css.scrollable : ''
  }`;
  return (
    <ul className={listClassName}>
      {waterItemsperDay.map((item) => {
        return <WaterItem key={item._id} item={item} />;
      })}
    </ul>
  );
};

export default WaterList;
