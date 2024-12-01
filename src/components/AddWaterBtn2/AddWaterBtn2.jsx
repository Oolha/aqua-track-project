import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import css from './AddWaterBtn2.module.css';

const AddWaterBtn2 = ({ onAddWaterClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className={css.addBtnBox}>
      <button
        type="button"
        className={css.addBtn}
        onClick={onAddWaterClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <Icon id="icon-plus-hover" className={css.icon} />
        ) : (
          <Icon id="icon-close-in-round" className={css.icon} />
        )}
      </button>
      <p className={css.addWaterText}>Add water</p>
    </div>
  );
};

export default AddWaterBtn2;
