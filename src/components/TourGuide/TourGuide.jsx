import { useState, useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { useTranslation } from 'react-i18next';

const TourGuide = () => {
  const { t } = useTranslation();
  const { setIsOpen } = useTour();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isButtonVisible && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '10px',
            backgroundColor: '#9BE1A0',
            color: '#323F47',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            cursor: 'pointer',
            zIndex: '99',
          }}
          onClick={() => setIsOpen(true)}
        >
          {t('homepage.advantages.tour')}
        </button>
      )}
    </>
  );
};

export default TourGuide;
