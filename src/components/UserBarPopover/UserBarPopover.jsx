import { Icon } from '../Icon/Icon';
import css from './UserBarPopover.module.css';

const UserBarPopover = ({}) => {
  return (
    <div className={css.mainBox}>
      <button type="button" className={css.btnSetting}>
        <Icon id="icon-settings" size={16} className={css.iconSetting} />
        <h4>Setting</h4>
      </button>
      <button type="button" className={css.btnLogOut}>
        <Icon id="icon-log-out" size={16} className={css.iconLogOut} />
        <h4>Log out</h4>
      </button>
    </div>
  );
};

export default UserBarPopover;
