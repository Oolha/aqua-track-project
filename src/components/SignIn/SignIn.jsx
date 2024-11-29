import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Icon } from '../Icon/Icon.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import css from './SignIn.module.css'; // Стилі форми

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function SignInForm() {
  const [showPwd, setShowPwd] = useState(false);
  const [notification, setNotification] = useState(null); // Для повідомлень
  const navigate = useNavigate();

  const togglePwdVisibility = () => setShowPwd((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Запит на backend
      const response = await axios.post('https://example.com/api/signin', data);

      // Симуляція відповіді сервера
      const { token } = response.data;

      // Збереження токена та авторизація
      localStorage.setItem('authToken', token);

      // Очищення форми
      reset();

      // Перенаправлення на TrackerPage
      navigate('/tracker');
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to log in. Please try again.';
      // Відображення помилки
      setNotification(errorMessage);

      // Автоматичне закриття сповіщення
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <>
      <div className={css.loginContainer}>
        <Logo/>
  <div className={css.formWrapper}>
    <h2 className={css.title}>Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={css.form}>

      <div className={css.field}>
        <label htmlFor="email" className={css.formLabel}>
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className={`${css.formInput} ${errors.email ? css.error : ''}`}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}
          </div>

      <div className={css.field}>
        <label htmlFor="password" className={css.formLabel}>
          Password
        </label>
        <div className={css.passwordWrapper}>
          <input
            {...register('password')}
            type={showPwd ? 'text' : 'password'}
            placeholder="Enter your password"
            className={`${css.formInput} ${errors.password ? css.error : ''}`}
                />
                {errors.password && (
                <p className={css.errorMessage}>{errors.password.message}</p>
              )}
          <button
            type="button"
            className={css.passwordToggle}
            onClick={togglePwdVisibility}
            aria-label={showPwd ? 'Hide password' : 'Show password'}
          >
            <Icon id={showPwd ? 'icon-eye' : 'icon-eye-off'} size={20} className={css.iconEye}/>
          </button>
            </div>

            </div>
<div className={css.btnWrapper}>
        <button type="submit" className={css.formButton}>
          Sign In
              </button>
              </div>
          </form>

      </div>


        <div>
    <p className={css.signinText}>
      Don&apos;t have an account?{' '}
      <Link to="/signup" className={css.signupLink}>
        Sign Up
      </Link>
    </p>
        </div>


  {notification && <div className={css.notification}>{notification}</div>}
</div>
    </>
  );
};

  export default SignInForm;

  //   return (
//     <div className="login-container">
//       {/* <h1 className="logo">AQUATRACK</h1>
//       <div className="form-wrapper"> */}
//         <h2 className="logo">Sign In</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="form">
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               {...register('email')}
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className={`form-input ${errors.email ? 'error' : ''}`}
//             />
//             {errors.email && (
//               <p className="error-text">{errors.email.message}</p>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <div className="password-wrapper">
//               <input
//                 {...register('password')}
//                 type={showPwd ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 className={`form-input ${errors.password ? 'error' : ''}`}
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePwdVisibility}
//                 aria-label={showPwd ? 'Hide password' : 'Show password'}
//               >
//                 <Icon id={showPwd ? 'icon-eye' : 'icon-eye-off'} size={24} />
//               </button>
//             </div>
//             {errors.password && (
//               <p className="error-text">{errors.password.message}</p>
//             )}
//         </div>

//         <div className='btn-wrapper'
//           <button type="submit" className="form-button">
//             Sign In
//         </button>
//         </div>
//         </form>
//         <p className="signup-text">
//           Don`&apos;`t have an account?{' '}
//           <Link to="/signup" className="signup-link">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//       {notification && <div className="notification">{notification}</div>}
//     </div>
