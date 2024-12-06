import { Link } from 'react-router-dom';
import styles from './WelcomeSection.module.css';
import Logo from '../Logo/Logo.jsx';
import { useTranslation } from 'react-i18next';

function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <div className={styles.welcomFont}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.box}>
        <p className={styles.subtitle}>{t('homepage.welcome.text')}</p>
        <h2 className={`${styles.title} title`}>{t('homepage.welcome.title')}</h2>
        <div className={styles.links}>
          <Link to="/signup" className={`${styles.linkGreen} linkGreen`}>
            {t('homepage.welcome.tryBtn')}
          </Link>
          <Link to="/signin" className={`${styles.linkWhite} linkWhite`}>
            {t('homepage.welcome.signInBtn')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;