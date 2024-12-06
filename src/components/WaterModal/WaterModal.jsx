import { useTranslation } from 'react-i18next'; // Добавляем хук для перевода
import style from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ entry = {}, toggleModal }) => {
  const { t } = useTranslation(); // Получаем функцию для перевода

  return (
    <>
      <h2 className={style.modalTitle}>
        {entry._id ? t('waterModal.edit') : t('waterModal.add')} {/* Используем локализацию */}
      </h2>
      <WaterForm entry={entry} toggleModal={toggleModal} />
    </>
  );
};

export default WaterModal;