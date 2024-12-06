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
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';

const HomePage = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <TourProvider steps={steps}>
      <TourGuide />
      <div className={styles.homePage}>
        {isLoading && <Loader />}
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </TourProvider>
  );
};

export default HomePage;
