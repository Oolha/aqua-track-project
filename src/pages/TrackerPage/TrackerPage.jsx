import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo'
import css from './TrackerPage.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchMonthlyWaterEntries} from '../../redux/water/operations';
import {selectIsLoading} from '../../redux/water/selectors.js';
import {selectCurrentDate} from '../../redux/date/selectors.js'
import {getNumberMonth} from '../../utils/calendar.js'
 // import {parseDate} from '../../utils/calendar.js'

const TrackerPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const serializedDate = useSelector(selectCurrentDate);
  const initialDate = new Date(serializedDate);
  const currentMonth= getNumberMonth(initialDate.getMonth()+1);
  const currentYear=initialDate.getFullYear();
  const date={year:currentYear,month:currentMonth};

  useEffect(() => {
    dispatch(fetchMonthlyWaterEntries(date));
  }, [dispatch,date]);



  return (
    
    <div className={css.wrapper}>
       <div>{isLoading && "Request in progress..."}</div>
      <WaterMainInfo />
      <WaterDetailedInfo/>
    </div>
  );
};

export default TrackerPage;
