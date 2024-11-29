// const SignInPage = ({}) => {
//   return <div></div>;
// };

// export default SignInPage;

import SignInForm from '../../components/SignIn/SignIn.jsx';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

function SignInPage() {
  return (
    <div className={css.login}>
      <SignInForm />
      <div className={css.hidden}>
        <AdvantagesSection />
      </div>
    </div>
  );
}

export default SignInPage;

