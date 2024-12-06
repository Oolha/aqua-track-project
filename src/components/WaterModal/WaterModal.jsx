import style from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ entry = {}, toggleModal }) => (
  <>
    <h2 className={style.modalTitle}>
      {entry._id ? 'Edit the entered amount of water' : 'Add water'}
    </h2>
    <WaterForm entry={entry} toggleModal={toggleModal} />
  </>
);

export default WaterModal;
