import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectUserDailyNorma } from '../../redux/auth/selectors';

const WaterDailyNorma = () => {
  const dailyNorma = useSelector(selectUserDailyNorma);

  const formatVolume = (l) => {
    return `${l.toFixed(1)} L`;
  };

  return (
    <div className={css.wrapper}>
      <p className={css.normaLitr}>{formatVolume(dailyNorma)}</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
