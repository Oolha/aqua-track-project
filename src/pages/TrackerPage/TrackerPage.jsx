import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TourProvider } from '@reactour/tour';
import TourGuide from '../../components/TourGuide/TourGuide.jsx';

import { fetchMonthlyWaterEntries } from '../../redux/water/operations';

import { selectCurrentDate } from '../../redux/date/selectors.js';
import { getNumberMonth } from '../../utils/calendar.js';
import { selectAuthIsLoading } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import { selectIsLoading } from '../../redux/water/selectors.js';
// import {parseDate} from '../../utils/calendar.js'

const steps = [
  { selector: '.normaLitr', content: 'Your daily water intake' },
  {
    selector: '.scale',
    content:
      'A scale that displays the ratio of the water you actually drink per day to your daily water intake requirement',
  },
  { selector: '.addWaterText', content: 'Click to add water!' },
  {
    selector: '.monthInfo',
    content:
      'Detailed information about the water drunk for the selected day and month',
  },
];

const TrackerPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const isLoading2 = useSelector(selectIsLoading);
  const serializedDate = useSelector(selectCurrentDate);
  const initialDate = new Date(serializedDate);
  const currentMonth = getNumberMonth(initialDate.getMonth() + 1);
  const currentYear = initialDate.getFullYear();

  useEffect(() => {
    const date = { year: currentYear, month: currentMonth };
    dispatch(fetchMonthlyWaterEntries(date));
  }, [dispatch, currentMonth, currentYear]);

  return (
    <TourProvider steps={steps}>
      <TourGuide />
      <div className={css.wrapper}>
        {isLoading || (isLoading2 && <Loader />)}
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
    </TourProvider>
  );
};

export default TrackerPage;
