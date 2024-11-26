import WelcomeSection from '../../components/WelcomeSection/WelcomeSection.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
