import { useDispatch, useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { selectDailyEntries } from '../../redux/water/selectors';
import { useEffect } from 'react';


const WaterList = () => {
  const dispatch = useDispatch();
  const dailyEntries = useSelector(selectDailyEntries);

  // useEffect(() => {
  //   dispatch(fetchDailyWaterEntries());
  // }, [dispatch]);
  return (
    <ul className={css.list}>
      {/* {dailyEntries.map((item) => {
        return <WaterItem key={item._id} item={item} />;
      })} */}
    </ul>
  );
};

export default WaterList;
