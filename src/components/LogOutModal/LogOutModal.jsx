import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import clsx from 'clsx';

// import { Modal } from '../Modal/Modal.jsx';
// import { useModal } from '../../hooks/useModalHook.js';
// import ModalUserSettings from '../ModalUserSettings/ModalUserSettings';

// import { toggleModal } from '../../hooks/useModalHook.js';
// import Container from '../Сontainer/Container.jsx';

import css from './LogOutModal.module.css';
import { fetchLogOut } from '../../redux/auth/operations.js';



const LogOutModal = ({toggleModal}) => {
  // const [isSettingsModalOpen, setIsSettingsModalOpen] = useModal();
  // const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const dispatch = useDispatch();
  // const isOpenModal = useSelector((state) => state.modal.isOpen);

  // const onCloseModal = () => {
  //   dispatch(toggleModal());
  // };

  return (
    <>
        <div className={css.modal}>

          <h2 className={css.title}>Log out</h2>
          <p className={css.text}>Do you really want to leave?</p>

          <div className={css.boxButton}>
            <button
              className={clsx(css.button, css.logoutButton)}
              type="button"
              onClick={() => dispatch(fetchLogOut)}
            >
              Log out
            </button>

            <button
              className={clsx(css.button, css.cancelButton)}
              type="button"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>

        </div>
    </>
  );
};

export default LogOutModal;
