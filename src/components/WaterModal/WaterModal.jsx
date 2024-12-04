import style from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ entry = {}, onAddWater }) => (
  <>
    <h2 className={style.modalTitle}>
      {entry.id ? 'Edit the entered amount of water' : 'Add water'}
    </h2>
    <WaterForm entry={entry} onAddWater={onAddWater} />
  </>
);

export default WaterModal;
