import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

const WaterList = ({ waterItems }) => {
  return (
    <ul className={css.list}>
      {waterItems.map((item, index) => {
        <WaterItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default WaterList;
