import { Icon } from '../Icon/Icon';
import css from './AddWaterBtn2.module.css';

const AddWaterBtn2 = ({ onAddWaterClick }) => {
  return (
    <div className={css.addBtnBox}>
      <button type="button" className={css.addBtn} onClick={onAddWaterClick}>
        <Icon id="icon-close-in-round" className={css.icon} />
      </button>
      <p className={css.addWaterText}>Add water</p>
    </div>
  );
};

export default AddWaterBtn2;
