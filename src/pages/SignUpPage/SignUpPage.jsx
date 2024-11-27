import SignUpForm from '../../components/SignUp/SignUp.jsx';
import css from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className={css.container}>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
