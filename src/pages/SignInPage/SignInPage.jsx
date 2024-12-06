import SignInForm from '../../components/SignIn/SignIn.jsx';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';

function SignInPage() {
  const isLoading = useSelector(selectAuthIsLoading);
  return (
    <div className={css.login}>
      {isLoading && <Loader />}
      <SignInForm />
      <div className={css.advantages}>
        <AdvantagesSection />
      </div>
    </div>
  );
}

export default SignInPage;

// // export default SignInPage;
// import SignInForm from "../../components/SignIn/SignIn.jsx";
// import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";
// // import { Toaster } from "react-hot-toast";

// const SignInPage = () => {
//   return (
//     <>
//       <div>
//         <SignInForm />
//       </div>
//       <div className="advantages-section">
//   <AdvantagesSection />
// </div>
//       {/* <Toaster position="top-right" /> */}
//     </>
//   );
// };

// export default SignInPage;
