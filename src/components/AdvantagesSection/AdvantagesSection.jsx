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
            className={styles.avatar}
            // src="../../assets/images/MaleMemojis2.jpg"
            alt="Av2"
          />
          <img
            className={styles.avatar}
            // src="../../assets/images/MaleMemojis1.jpg"
            alt="Av3"
          />
        </div> */}
        {/* <p className={styles.textParagraph}>
          Our <span className={styles.happy}>happy</span> customers
        </p> */}
      </div>
      <ul className={styles.listBtn}>
        <li className={styles.listItemHabit}>Habit drive</li>
        <li className={styles.listItemView}>View statistics</li>
        <li className={styles.listItemPersonal}>Personal rate setting</li>
      </ul>
    </div>
  );
}

export default AdvantagesSection;
