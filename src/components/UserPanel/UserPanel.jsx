import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import {
  selectUserDisplayName,
} from '../../redux/auth/selectors';

const UserPanel = () => {
    const displayName = useSelector(selectUserDisplayName);
  return (
    <div className={css.mainBox}>
      <h2 className={css.title}>
        Hello
        <span className={css.span}>
          , {displayName }!
        </span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
