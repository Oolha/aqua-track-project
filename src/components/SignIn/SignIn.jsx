// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { Icon } from '../Icon/Icon.jsx';
// import './SignIn.module.css'; // Стилі форми

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email format') // Некоректний формат email
//     .required('Email is required'), // Email обов'язковий
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters') // Мінімум 8 символів
//     .required('Password is required'), // Пароль обов'язковий
// });

// function SignInForm() {
//   const [showPwd, setShowPwd] = useState(false);
//   const [notification, setNotification] = useState(null); // Для повідомлень
//   const navigate = useNavigate();

//   const togglePwdVisibility = () => setShowPwd(prev => !prev);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async data => {
//     try {
//       // Запит на backend
//       const response = await axios.post('https://example.com/api/signin', data);

//       // Симуляція відповіді сервера
//       const { token } = response.data;

//       // Збереження токена та авторизація
//       localStorage.setItem('authToken', token);

//       // Очищення форми
//       reset();

//       // Перенаправлення на TrackerPage
//       navigate('/tracker');
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || 'Failed to log in. Please try again.';
//       // Відображення помилки
//       setNotification(errorMessage);

//       // Автоматичне закриття сповіщення
//       setTimeout(() => setNotification(null), 5000);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="logo">AQUATRACK</h1>
//       <div className="form-wrapper">
//         <h2 className="form-title">Sign In</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
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
//                <Icon id={showPwd ? 'icon-eye' : 'icon-eye-off'} size={24} />
//               </button>
//             </div>
//             {errors.password && (
//               <p className="error-text">{errors.password.message}</p>
//             )}
//           </div>
//           <button type="submit" className="form-button">
//             Sign In
//           </button>
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
//   );
// }

// export default SignInForm;

