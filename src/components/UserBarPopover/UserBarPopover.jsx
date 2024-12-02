import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import css from './UserBarPopover.module.css';
import ModalUserSettings from '../ModalUserSettings/ModalUserSettings';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';

const UserBarPopover = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useModal();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };
  return (
    <div className={css.mainBox}>
      <button
        type="button"
        className={css.btnSetting}
        onClick={setIsSettingsModalOpen}
      >
        <Icon id="icon-settings" size={16} className={css.iconSetting} />
        <h4>Setting</h4>
      </button>
      {isSettingsModalOpen && (
        <Modal toggleModal={setIsSettingsModalOpen} isSettings="false">
          <ModalUserSettings />
        </Modal>
      )}

      <button type="button" className={css.btnLogOut} onClick={openLogOutModal}>
        <Icon id="icon-log-out" size={16} className={css.iconLogOut} />
        <h4 className={css.textLogOut}>Log out</h4>
      </button>

      {isSettingsModalOpen && (
          <Modal toggleModal={setIsSettingsModalOpen} isSettings="false">
          <ModalUserSettings toggleModal={setIsSettingsModalOpen}/>
          </Modal>)}
    </div>

    //   {isSettingsModalOpen && (
    //     <UserSettingsModal onClose={closeSettingsModal} />
    //   )}

    //   {isLogOutModalOpen && (
    //     <LogOutModal onClose={closeLogOutModal} />
    // )
    // }
  );
};

export default UserBarPopover;
