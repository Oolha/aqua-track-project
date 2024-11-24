import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';

const UserPanel = ({}) => {
  return (
    <div className={css.mainBox}>
      <h2 className={css.title}>
        Hello <span className={css.name}>, !</span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
