import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'; // Добавляем хук для перевода
import css from './WaterDailyNorma.module.css';
import { selectUserDailyNorma } from '../../redux/auth/selectors';

const WaterDailyNorma = () => {
  const dailyNorma = useSelector(selectUserDailyNorma);
  const { t } = useTranslation(); // Получаем функцию для перевода

  const formatVolume = (l) => {
    return `${l.toFixed(1)} L`;
  };

  return (
    <div className={css.wrapper}>
      <p className={`${css.normaLitr} normaLitr`}>{formatVolume(dailyNorma)}</p>
      <p className={css.text}>{t('waterDailyNorma.dailyNorma')}</p> {/* Используем локализацию для текста */}
    </div>
  );
};

export default WaterDailyNorma;