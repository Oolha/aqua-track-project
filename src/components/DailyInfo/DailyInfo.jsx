import AddWaterBtn2 from '../AddWaterBtn2/AddWaterBtn2';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import WaterModal from '../WaterModal/WaterModal';
import css from './DailyInfo.module.css';
import { useState } from 'react';

const DailyInfo = ({}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [waterItems, setWaterItems] = useState([]);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const addWaterItem = (newWaterItem) => {
    setWaterItems([...waterItems, newWaterItem]);
    closeModal();
  };

  return (
    <div className={css.mainBox}>
      <div className={css.dailyInfoBox}>
        <ChooseDate />
        <AddWaterBtn2 onAddWaterClick={showModal} />
      </div>

      <WaterList waterItems={waterItems} />

      {isModalVisible && (
        <WaterModal onClose={closeModal} onAddWater={addWaterItem} />
      )}
    </div>
  );
};

export default DailyInfo;
