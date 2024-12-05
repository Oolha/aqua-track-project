import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import {
  selectIsLoggedIn,
  selectUserDisplayName,
} from '../../redux/auth/selectors';

const UserPanel = ({}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const displayName = useSelector(selectUserDisplayName);

  return (
    <div className={css.mainBox}>
      <h2 className={css.title}>
        Hello{' '}
        <span className={css.span}>
          , {isLoggedIn ? displayName : 'Guest'}!
        </span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
