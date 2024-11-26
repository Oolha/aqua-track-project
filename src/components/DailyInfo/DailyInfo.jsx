import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import css from './DailyInfo.module.css';
import { useState } from 'react';

const DailyInfo = ({}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className={css.dailyInfoBox}>
      <ChooseDate />
      <AddWaterBtn onAddWaterClick={showModal} />
    </div>
  );
};

export default DailyInfo;
