import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import style from './Modal.module.css';
const modalRoot =
  document.getElementById('modalRoot') || document.createElement('div');
modalRoot.id = 'modalRoot';
document.body.appendChild(modalRoot);

export const Modal = ({ children, toggleModal, isSettings = false }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      onClick={handleClickOnBackdrop}
      className={style.backdrop}
    >
      <div className={`${style.modal} ${isSettings ? style.modal_settings : ""}`} >
        <button
          className={style.btn_close}
          type="button"
          onClick={toggleModal}
        >
          <Icon id="icon-close" size={24} className={style.icon_close} />
        </button>
        <div className={style.content_wrapper}>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
