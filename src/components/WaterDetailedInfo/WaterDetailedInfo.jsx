import DailyInfo from '../DailyInfo/DailyInfo';
import UserPanel from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';
import {MonthInfo} from '../../components/MonthInfo/MonthInfo'

const WaterDetailedInfo = ({}) => {
  return (
    <div className={css.mainBox}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo/>
    </div>
  );
};

export default WaterDetailedInfo;
