import css from './AddWaterBtn.module.css';
import { Icon } from '../Icon/Icon';

const AddWaterBtn = ({ handleClickBtn }) => {
  return (
    <button onClick={handleClickBtn} className={css.button} type="button">
      <Icon id="icon-plus" height={24} width={24} className={css.icon} />
      <p>Add water</p>
    </button>
  );
};

export default AddWaterBtn;
