import WelcomeSection from '../../components/WelcomeSection/WelcomeSection.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

import { TourProvider } from '@reactour/tour';
import TourGuide from '../../components/TourGuide/TourGuide.jsx';

const steps = [
  { selector: '.title', content: 'Hi! Welcome to AquaTrack!' },
  { selector: '.linkGreen', content: 'Click here and register!' },
  { selector: '.linkWhite', content: 'Click here to log in to your account!' },
];

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <TourProvider steps={steps}>
      <TourGuide />
      <div className={styles.homePage}>
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </TourProvider>
  );
};

export default HomePage;
