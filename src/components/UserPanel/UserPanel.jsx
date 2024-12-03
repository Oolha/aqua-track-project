import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { selectAuthUser, selectIsLoggedIn } from '../../redux/auth/selectors';

const UserPanel = ({}) => {
  const user = useSelector(selectAuthUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const displayName = isLoggedIn
    ? user?.name || user?.email || 'User'
    : 'Guest';

  return (
    <div className={css.mainBox}>
      <h2 className={css.title}>
        Hello <span className={css.span}>, {displayName}!</span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
