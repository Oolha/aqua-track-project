import { Icon } from '../Icon/Icon';
import css from './WaterItem.module.css';
import { parseTime } from '../../utils/calendar.js';
import { useModal } from '../../hooks/useModalHook.js';
import { Modal } from '../Modal/Modal.jsx';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal.jsx';
import WaterModal from "../WaterModal/WaterModal.jsx"

const WaterItem = ({ item }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useModal();
  const [isWaterModalOpen, setIsWaterModalOpen] = useModal();

  return (
    <div className={css.waterItem}>
      <Icon id="icon-water" className={css.icon} />
      <div className={css.listItems}>
        <div className={css.itemTextBox}>
          <p className={css.itemText}>{item.volume}ml</p>
          <p className={css.itemTextTime}>{parseTime(item.date)}</p>
        </div>
        <div className={css.itemIconsBox}>
          <button type="button" onClick={setIsWaterModalOpen}>
            <Icon id="icon-pencil" className={css.icons} />
          </button>
          {isWaterModalOpen && (
            <Modal toggleModal={setIsWaterModalOpen}>
              <WaterModal/>
            </Modal>
          )}
          <button type="button" onClick={setIsDeleteModalOpen}>
            <Icon id="icon-bin" className={css.icons} />
          </button>
          {isDeleteModalOpen && (
            <Modal toggleModal={setIsDeleteModalOpen}>
              <DeleteWaterModal
                itemId={item._id}
                toggleModal={setIsDeleteModalOpen}
              />
            </Modal>
          )}
          


        </div>
      </div>
    </div>
  );
};

export default WaterItem;
