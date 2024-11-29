import { useDispatch, useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { selectWaterEntries } from '../../redux/water/selectors';
import { useEffect } from 'react';
import { fetchDailyWaterEntries } from '../../redux/water/operations';

const WaterList = ({ waterItems }) => {
  const dispatch = useDispatch();
  const waterEntries = useSelector(selectWaterEntries);

  useEffect(() => {
    dispatch(fetchDailyWaterEntries());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      {waterItems.map((item, index) => {
        <WaterItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default WaterList;
