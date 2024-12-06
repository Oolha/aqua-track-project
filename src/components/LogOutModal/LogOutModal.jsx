import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import css from './LogOutModal.module.css';
import { fetchLogOut } from '../../redux/auth/operations.js';
import { useTranslation } from 'react-i18next';


const LogOutModal = ({ toggleModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
        <div className={css.modal}>

          <h2 className={css.title}>{t('logOutModal.title')}</h2>
          <p className={css.text}>{t('logOutModal.confirm')}</p>

          <div className={css.boxButton}>
            <button
              className={clsx(css.button, css.logoutButton)}
              type="button"
              onClick={() => dispatch(fetchLogOut())}
            >
              {t('logOutModal.logOut')}
            </button>

            <button
              className={clsx(css.button, css.cancelButton)}
              type="button"
              onClick={toggleModal}
            >
              {t('logOutModal.close')}
            </button>
          </div>
      </div>
    </>
  );
};

export default LogOutModal;