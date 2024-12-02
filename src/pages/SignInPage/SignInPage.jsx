import SignInForm from '../../components/SignIn/SignIn.jsx';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection.jsx';

function SignInPage() {
  return (
    <div className={css.login}>
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