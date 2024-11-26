import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  // const dailyNorma = useSelector((state) => { });

  // export const formatVolume = (ml) => {
  //   return '${(ml / 1000).toFixed(1)} L';
  // }

  return (
    <div className={css.wrapper}>
      <p className={css.normaLitr}>1.5L</p>
      {/* {formatVolume(dailyNorma)} */}
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
