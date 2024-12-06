import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { selectUserDisplayName } from '../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';  
import { selectAuthUser } from '../../redux/auth/selectors';

const UserPanel = () => {
  const { t } = useTranslation(); 
  const { name } = useSelector(selectAuthUser);

  return (
    <div className={css.mainBox}>
      <h2 className={css.title}>
        {t('userPanel.greeting')}{' '}  

        <span className={css.span}>, {name}!</span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;