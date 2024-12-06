import AddWaterBtn2 from '../AddWaterBtn2/AddWaterBtn2';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import WaterModal from '../WaterModal/WaterModal';
import css from './DailyInfo.module.css';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';
import { selectFormattedCurrentDate } from '../../redux/date/selectors.js';
import { useSelector } from 'react-redux';

const DailyInfo = () => {
  const date = useSelector(selectFormattedCurrentDate);
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
          <WaterModal toggleModal={setModalVisible} entry={{ date }} />
        </Modal>
      )}
    </div>
  );
};

export default DailyInfo;
