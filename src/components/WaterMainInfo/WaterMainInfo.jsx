import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import Logo from '../Logo/Logo';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import WaterModal from '../WaterModal/WaterModal';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../redux/auth/operations.js';

import bottleDesktop from '../../assets/images/bottle_desktop.png';
import bottleDesktop2x from '../../assets/images/bottle_desktop@2x.png';
import bottleTablet from '../../assets/images/bottle_tablet.png';
import bottleTablet2x from '../../assets/images/bottle_tablet@2x.png';
import bottleMobile from '../../assets/images/bottle_mobile.png';
import bottleMobile2x from '../../assets/images/bottle_mobile@2x.png';

const WaterMainInfo = () => {
  const [isOpenModal, setIsOpenModal] = useModal();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Logo />
      <WaterDailyNorma />

      <picture>
        <source
          srcSet={`${bottleDesktop} 1x, ${bottleDesktop2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${bottleTablet} 1x, ${bottleTablet2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${bottleMobile} 1x, ${bottleMobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <img
          className={css.imageBottle}
          src={bottleDesktop}
          alt="Transparent bottle for water"
        />
      </picture>

      <WaterProgressBar />
      <AddWaterBtn handleClickBtn={setIsOpenModal} />
      {isOpenModal && (
        <Modal toggleModal={setIsOpenModal}>
          <WaterModal />
        </Modal>
      )}
    </div>
  );
};

export default WaterMainInfo;
