import HappyCustomers from '../../components/HappyCustomers/HappyCustomers';
import styles from './AdvantagesSection.module.css';
import { useTranslation } from 'react-i18next';

function AdvantagesSection() {
  const { t } = useTranslation();
  
  return (
    <div className={styles.fontSection}>
      <div className={`${styles.listStylesImg} listStylesImg`}>
        <HappyCustomers />
      </div>
      <div className={styles.listBtn}>
        <button className={styles.btnHabit} type="button">
          {t('homepage.advantages.habitDrive')}
        </button>
        <span className={styles.ellipse}></span>
        <button className={styles.btnView} type="button">
          {t('homepage.advantages.viewStatistic')}
        </button>
        <button className={styles.btnPersonal} type="button">
          {t('homepage.advantages.personalSetting')}
        </button>
      </div>
    </div>
  );
}

export default AdvantagesSection;