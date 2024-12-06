import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import SignUpForm from '../../components/SignUp/SignUp.jsx';
import css from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={css.signUp}>
      <SignUpForm />
      <div className={css.hidden}>
        <AdvantagesSection />
      </div>
    </div>
  );
}

export default SignUpPage;
