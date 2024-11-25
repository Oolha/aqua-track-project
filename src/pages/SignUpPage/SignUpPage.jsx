import Logo from '../../components/Logo/Logo.jsx';
import SignUpForm from '../../components/SignUp/SignUp.jsx';
import css from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={css.containerUp}>
      <Logo />
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
