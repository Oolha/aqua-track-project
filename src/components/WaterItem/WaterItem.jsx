import { Icon } from '../Icon/Icon';
import css from './WaterItem.module.css';
import { parseTime } from '../../utils/calendar.js';

const WaterItem = ({ item }) => {
  return (
    <div className={css.waterItem}>
      <Icon id="icon-water" className={css.icon} />
      <div className={css.listItems}>
        <div className={css.itemTextBox}>
          <p className={css.itemText}>{item.volume}ml</p>
          <p className={css.itemTextTime}>{parseTime(item.date)}</p>
        </div>
        <div className={css.itemIconsBox}>
          <button type="button">
            <Icon id="icon-pencil" className={css.icons} />
          </button>
          <button type="button">
            <Icon id="icon-bin" className={css.icons} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterItem;
