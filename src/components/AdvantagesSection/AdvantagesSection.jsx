import styles from './AdvantagesSection.module.css';

function AdvantagesSection() {
  return (
    <div className={styles.fontSection}>
      <div className={styles.listStylesImg}>
        <div className={styles.avatarGroup}>
          <div className={`${styles.avatar} ${styles.avatar1}`}></div>
          <div className={`${styles.avatar} ${styles.avatar2}`}></div>
          <div className={`${styles.avatar} ${styles.avatar3}`}></div>
          {/* <div className={styles.avatar1}></div>
          <div className={styles.avatar2}></div>
          <div className={styles.avatar3}></div> */}
          {/* <img
            className={styles.avatar1}
            src="/assets/images/avatar1_mobile.png"
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
          /> */}
        </div>
        <p className={styles.textParagraph}>
          Our <span className={styles.happy}>happy</span> customers
        </p>
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
