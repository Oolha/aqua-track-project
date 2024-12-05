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
          srcSet="/assets/images/bottle_desktop.png 1x, /assets/images/bottle_desktop@2x.png 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/assets/images/bottle_tablet.png 1x, /assets/images/bottle_tablet@2x.png 2x"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/assets/images/bottle_mobile.png 1x, /assets/images/bottle_mobile@2x.png 2x"
          media="(max-width: 767px)"
        />
        <img
          className={css.imageBottle}
          src="/assets/images/bottle_desktop.png"
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
