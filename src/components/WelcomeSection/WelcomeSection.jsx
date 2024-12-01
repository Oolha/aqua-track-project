import { Link } from 'react-router-dom';
import styles from './WelcomeSection.module.css';

function WelcomeSection() {
  return (
    <div className={styles.welcomFont}>
      <div className={styles.box}>
        <h2 className={styles.subtitle}>Record daily water intake and track</h2>
        <h1 className={`${styles.title} title`}>Water consumption tracker</h1>
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

