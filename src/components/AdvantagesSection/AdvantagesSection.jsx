import HappyCustomers from '../../components/HappyCustomers/HappyCustomers';
import styles from './AdvantagesSection.module.css';

function AdvantagesSection() {
  return (
    <div className={styles.fontSection}>
      <div className={`${styles.listStylesImg} listStylesImg`}>
      <HappyCustomers />
      </div>
      <div className={styles.listBtn}>
        <button className={styles.btnHabit} type="button">
          Habit drive
        </button>
        <span className={styles.ellipse}></span>
        <button className={styles.btnView} type="button">
          View statistics
        </button>
        <button className={styles.btnPersonal} type="button">
          Personal rate setting
        </button>
      </div>
    </div>
  );
}

export default AdvantagesSection;
