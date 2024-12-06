import AddWaterBtn2 from '../AddWaterBtn2/AddWaterBtn2';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import WaterModal from '../WaterModal/WaterModal';
import css from './DailyInfo.module.css';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';

const DailyInfo = () => {
  const [isModalVisible, setModalVisible] = useModal();

  return (
    <div className={css.mainBox}>
      <div className={css.dailyInfoBox}>
        <ChooseDate />
        <AddWaterBtn2 onAddWaterClick={setModalVisible} />
      </div>

      <WaterList />

      {isModalVisible && (
        <Modal toggleModal={setModalVisible}>
          <WaterModal toggleModal={setModalVisible} />
        </Modal>
      )}
    </div>
  );
};

export default DailyInfo;
