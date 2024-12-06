import { useTranslation } from 'react-i18next'; 
import { Icon } from '../Icon/Icon';
import css from './UserBarPopover.module.css';
import { ModalUserSettings } from '../ModalUserSettings/ModalUserSettings.jsx';
import { Modal } from '../Modal/Modal';
import { useModal } from '../../hooks/useModalHook.js';
import LogOutModal from '../LogOutModal/LogOutModal.jsx';

const UserBarPopover = ({ closePopover }) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useModal();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useModal();
  const { t } = useTranslation(); 

  return (
    <div className={css.mainBox}>
      <button
        type="button"
        className={css.btnSetting}
        onClick={setIsSettingsModalOpen}
      >
        <Icon id="icon-settings" size={16} className={css.iconSetting} />
        <h4>{t('userBarPopover.setting')}</h4> 
      </button>
      {isSettingsModalOpen && (
        <Modal toggleModal={setIsSettingsModalOpen} isSettings="false">
          <ModalUserSettings toggleModal={setIsSettingsModalOpen} />
        </Modal>
      )}

      <button
        type="button"
        className={css.btnLogOut}
        onClick={setIsLogOutModalOpen}
      >
        <Icon id="icon-log-out" size={16} className={css.iconLogOut} />
        <h4 className={css.textLogOut}>{t('userBarPopover.logout')}</h4> 
      </button>
      {isLogOutModalOpen && (
        <Modal toggleModal={setIsLogOutModalOpen}>
          <LogOutModal toggleModal={setIsLogOutModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default UserBarPopover;