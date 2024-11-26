// const SignInPage = ({}) => {
//   return <div></div>;
// };

// export default SignInPage;

import Logo from '../../components/Logo/Logo.jsx';
import SignInForm from '../../components/SignIn/SignIn.jsx';
import css from './SignInPage.module.css';

function SignInPage() {
  return (
    <div className={css.container}>
      <Logo />
      <SignInForm />
    </div>
  );
}

export default SignInPage;