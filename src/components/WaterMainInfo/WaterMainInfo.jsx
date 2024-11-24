import css from './WaterMainInfo.module.css';

import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import Logo from '../Logo/Logo';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';

const WaterMainInfo = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <WaterDailyNorma />

      <picture>
        <source
          srcSet="/images/bottle_desktop.png 1x, /images/bottle_desktop@2x.png 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/images/bottle_tablet.png 1x, /images/bottle_tablet@2x.png 2x"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/images/bottle_mobile.png 1x, /images/bottle_mobile@2x.png 2x"
          media="(max-width: 767px)"
        />
        <img
          className={css.imageBottle}
          src="././images/bottle_desktop.png"
          alt="Transparent bottle for water"
        />
      </picture>

      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
