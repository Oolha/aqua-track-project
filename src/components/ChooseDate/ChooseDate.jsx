import css from './ChooseDate.module.css';
import {selectCurrentDate} from '../../redux/date/selectors.js'
import { useSelector } from 'react-redux';

import {getMonthName} from '../../utils/calendar.js'


const ChooseDate = () => {
  const today = new Date();
  const dayToday=today.getDate();
  const monthToday = today.getMonth();
  const serializedDate=useSelector(selectCurrentDate);

  const currentDate=new Date(serializedDate);
  const dayCurrentDate=currentDate.getDate();
  const monthCurrentDate=currentDate.getMonth();
  const isToday=((dayCurrentDate===dayToday)&&(monthCurrentDate===monthToday))?true:false


  return (
    <>

      <p className={css.curDate}>{(isToday)?"Today":`${getMonthName(currentDate)}, ${dayCurrentDate}`}</p>
    </>
  );
};

export default ChooseDate;
