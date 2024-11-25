import css from './UserBar.module.css';
import { Icon } from '../Icon/Icon';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { RxAvatar } from 'react-icons/rx';

const UserBar = ({}) => {
  return (
    <>
      <button type="button" className={css.btn}>
        <h4 className={css.name}>Name</h4>
        <RxAvatar className={css.avatar} />
        <Icon id="icon-menu" size={16} className={css.icon} />
      </button>
      <UserBarPopover />
    </>
  );
};

export default UserBar;
