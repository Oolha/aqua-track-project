import style from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ data = {} }) => (
  <>
    <h2 className={style.modalTitle}>
      {data.id ? 'Edit the entered amount of water' : 'Add water'}
    </h2>
    <WaterForm data={data} />
  </>
);

export default WaterModal;
