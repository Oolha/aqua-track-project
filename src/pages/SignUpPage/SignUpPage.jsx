import { useSelector } from 'react-redux';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import SignUpForm from '../../components/SignUp/SignUp.jsx';
import css from './SignUpPage.module.css';
import { selectAuthIsLoading } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';

function SignUpPage() {
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <div className={css.signUp}>
      {isLoading && <Loader />}
      <SignUpForm />
      <div className={css.hidden}>
        <AdvantagesSection />
      </div>
    </div>
  );
}

export default SignUpPage;
