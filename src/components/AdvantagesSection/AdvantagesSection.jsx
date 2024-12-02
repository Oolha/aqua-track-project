import HappyCustomers from '../../components/HappyCustomers/HappyCustomers';
import styles from './AdvantagesSection.module.css';

function AdvantagesSection() {
  return (
    <div className={styles.fontSection}>
      <div className={`${styles.listStylesImg} listStylesImg`}>
      <HappyCustomers />
        {/* <div className={styles.avatarGroup}>
          <img
            className={styles.avatar}
            // src="../../assets/images/MaleMemojis3.jpg"
            alt="Av1"
          />
          <img
            className={styles.avatar2}
            src="../../assets/images/avatar1_mobile.png"
            alt="Av2"
          />
          <img
            className={styles.avatar3}
            src="../../assets/images/avatar1_mobile.png"
            alt="Av3"
          />
        </div> */}
        {/* <p className={styles.textParagraph}>

          Our <span className={styles.happy}>happy</span> customers
        </p> */}
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
