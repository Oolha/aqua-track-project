import { Icon } from '../Icon/Icon';
import css from './WaterItem.module.css';

const WaterItem = ({ item }) => {
  return (
    <div className={css.waterItem}>
      <Icon id="icon-water" size={38} />
      <div className={css.listItems}>
        <div className={css.item}>
          <p className={css.itemText}>{item.volume}</p>
          <Icon id="icon-pencil" size={14} />
        </div>
        <div className={css.item}>
          <p className={css.itemText}>{item.date}</p>
          <Icon id="icon-bin" size={14} />
        </div>
      </div>
    </div>
  );
};

export default WaterItem;
