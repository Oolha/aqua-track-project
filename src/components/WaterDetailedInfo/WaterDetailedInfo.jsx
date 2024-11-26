import DailyInfo from '../DailyInfo/DailyInfo';
import UserPanel from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = ({}) => {
  return (
    <div className={css.mainBox}>
      <UserPanel />
      <DailyInfo />
    </div>
  );
};

export default WaterDetailedInfo;
