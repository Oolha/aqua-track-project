import { Link } from 'react-router-dom';
import styles from './WelcomeSection.module.css';
import Logo from '../Logo/Logo.jsx';

function WelcomeSection() {
  return (
    <div className={styles.welcomFont}>
      <Logo />
      <div className={styles.box}>
        <h2 className={styles.subtitle}>Record daily water intake and track</h2>
        <h1 className={styles.title}>Water consumption tracker</h1>
        <div className={styles.links}>
          <Link to="/signup" className={styles.tryTrackerBtn}>
            Try Tracker
          </Link>
          <Link to="/signin" className={styles.signInBtn}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
export default WelcomeSection;
