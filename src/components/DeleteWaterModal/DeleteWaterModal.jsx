import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './DeleteWaterModal.module.css';
import { deleteWaterEntry } from '../../redux/water/operations.js';

const DeleteWaterModal = ({ itemId, toggleModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterEntry(itemId));
    toggleModal();
  };

  return (
    <>
      <div className={css.modal}>
        <h2 className={css.title}>Delete entry</h2>
        <p className={css.text}>Are you sure you want to delete the entry?</p>

        <div className={css.boxButton}>
          <button
            className={clsx(css.button, css.logoutButton)}
            type="button"
            onClick={handleDelete}
          >
            Delete
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

export default DeleteWaterModal;
