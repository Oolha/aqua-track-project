import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './DeleteWaterModal.module.css';
import { deleteWaterEntry } from '../../redux/water/operations.js';
import { useTranslation } from 'react-i18next';

const DeleteWaterModal = ({ itemId, toggleModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterEntry(itemId));
    toggleModal();
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={css.modal}>
        <h2 className={css.title}>{t('deleteModal.title')}</h2>
        <p className={css.text}>{t('deleteModal.confirm')}</p>

        <div className={css.boxButton}>
          <button
            className={clsx(css.button, css.logoutButton)}
            type="button"
            onClick={handleDelete}
          >
            {t('deleteModal.delete')}
          </button>
          <button
            className={clsx(css.button, css.cancelButton)}
            type="button"
            onClick={toggleModal}
          >
            {t('deleteModal.close')}
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteWaterModal;
