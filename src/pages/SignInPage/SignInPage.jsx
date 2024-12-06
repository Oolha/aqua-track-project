import SignInForm from '../../components/SignIn/SignIn.jsx';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import Languages from '../../components/Languages/Languages';

function SignInPage() {
  const isLoading = useSelector(selectAuthIsLoading);
  return (
  <div className={css.wrapperStyle}>
    <Languages />
    <div className={css.login}>
      {isLoading && <Loader />}
      <SignInForm />
      <div className={css.advantages}>
        <AdvantagesSection />
      </div>
    </div>
  </div>
  );
}

export default SignInPage;