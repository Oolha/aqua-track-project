import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import css from './UserBarPopover.module.css';

const UserBarPopover = ({}) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

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
        onClick={openSettingsModal}
      >
        <Icon id="icon-settings" size={16} className={css.iconSetting} />
        <h4>Setting</h4>
      </button>
      <button type="button" className={css.btnLogOut} onClick={openLogOutModal}>
        <Icon id="icon-log-out" size={16} className={css.iconLogOut} />
        <h4>Log out</h4>
      </button>
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
