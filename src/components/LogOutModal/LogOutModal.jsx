import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import css from './LogOutModal.module.css';
import { fetchLogOut } from '../../redux/auth/operations.js';

const LogOutModal = ({ toggleModal }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.modal}>
        <h2 className={css.title}>Log out</h2>
        <p className={css.text}>Do you really want to leave?</p>

        <div className={css.boxButton}>
          <button
            className={clsx(css.button, css.logoutButton)}
            type="button"
            onClick={() => dispatch(fetchLogOut())}
          >
            Log out
          </button>

          <button
            className={clsx(css.button, css.cancelButton)}
            type="button"
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default LogOutModal;
