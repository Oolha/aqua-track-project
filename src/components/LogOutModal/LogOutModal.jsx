import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import Modal from "../Modal/Modal.jsx";
import { toggleModal } from "../../hooks/useModalHook.js";
import  Container  from "../Сontainer/Container.jsx";

import css from "./LogOutModal.module.css";

const LogOutModal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.modal.isOpen);

  const onCloseModal = () => {
    dispatch(toggleModal());
  };


  return (
    <>
      <Container>
        {isOpenModal && (
          <Modal onCloseModal={onCloseModal}>
            <div className={css.modal}>
              <h2 className={css.title}>Log out</h2>
              <p className={css.text}>Do you really want to leave?</p>

              <div className={css.boxButton}>
                <button className={clsx(css.button, css.logoutButton)} type="button">Log out</button>
                <button className={clsx(css.button, css.cancelButton)} type="button" onClick={onCloseModal}>Cancel</button>
              </div>

            </div>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default LogOutModal;
