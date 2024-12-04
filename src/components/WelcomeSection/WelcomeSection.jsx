import { Link } from 'react-router-dom';
import styles from './WelcomeSection.module.css';
import Logo from '../Logo/Logo.jsx';

function WelcomeSection() {
  return (
    <div className={styles.welcomFont}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.box}>
        <p className={styles.subtitle}>Record daily water intake and track</p>
        <h2 className={`${styles.title} title`}>Water consumption tracker</h2>
        <div className={styles.links}>
          <Link to="/signup" className={`${styles.linkGreen} linkGreen`}>
            Try Tracker
          </Link>
          <Link to="/signin" className={`${styles.linkWhite} linkWhite`}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
export default WelcomeSection;

