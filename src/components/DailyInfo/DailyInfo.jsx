import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';
import { useState } from 'react';

const DailyInfo = ({}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [waterItems, setWaterItems] = useState([]);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <div className={css.dailyInfoBox}>
        <ChooseDate />
        <AddWaterBtn onAddWaterClick={showModal} />
      </div>

      <WaterList waterItems={waterItems} />
    </div>
  );
};

export default DailyInfo;
