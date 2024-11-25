import css from './AddWaterBtn.module.css';
import { Icon } from '../Icon/Icon';

const AddWaterBtn = () => {
  return (
    <button className={css.button}>
      <Icon id="icon-plus" size={24} className={css.icon} />
      <p>Add water</p>
    </button>
  );
};

export default AddWaterBtn;
