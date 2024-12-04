import { Icon } from '../Icon/Icon';
import css from './UserBarPopover.module.css';
import { ModalUserSettings } from '../ModalUserSettings/ModalUserSettings.jsx';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';
import LogOutModal from '../LogOutModal/LogOutModal.jsx';

const UserBarPopover = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useModal();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useModal();

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
          <ModalUserSettings toggleModal={setIsSettingsModalOpen}/>
        </Modal>
      )}

      <button type="button" className={css.btnLogOut} onClick={setIsLogOutModalOpen}>
        <Icon id="icon-log-out" size={16} className={css.iconLogOut} />
        <h4 className={css.textLogOut}>Log out</h4>
      </button>
      {isLogOutModalOpen && (
        <Modal toggleModal={setIsLogOutModalOpen}>
          <LogOutModal toggleModal={setIsLogOutModalOpen}/>
        </Modal>
      )}
      
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
