import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './SignIn.module.css'; // Стилі форми

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format') // Некоректний формат email
    .required('Email is required'), // Email обов'язковий
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters') // Мінімум 8 символів
    .required('Password is required'), // Пароль обов'язковий
});

function SignInForm() {
  const [showPwd, setShowPwd] = useState(false);
  const [notification, setNotification] = useState(null); // Для повідомлень
  const navigate = useNavigate();

  const togglePwdVisibility = () => setShowPwd(prev => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      // Запит на backend
      const response = await axios.post('https://example.com/api/login', data);

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
    <div className="login-container">
      <h1 className="logo">AQUATRACK</h1>
      <div className="form-wrapper">
        <h2 className="form-title">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                {...register('password')}
                type={showPwd ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className={`form-input ${errors.password ? 'error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePwdVisibility}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="form-button">
            Sign In
          </button>
        </form>
        <p className="signup-text">
          Don`&apos;`t have an account?{' '}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default SignInForm;

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import './SignInForm.css'; // Стили для оформлення

// // Схема валідації Yup
// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Please enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// function SignInForm() {
//   const navigate = useNavigate();
//   const [notification, setNotification] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     setNotification(null); // Очистка повідомлень
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const { token } = await response.json();
//       localStorage.setItem('authToken', token); // Зберігаємо токен
//       navigate('/tracker'); // Перенаправлення на TrackerPage
//     } catch (error) {
//       setNotification(error.message); // Відображення помилки
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       {notification && <div className="notification">{notification}</div>}

//       <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
//         {/* Email Field */}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email')}
//             className={`form-input ${errors.email ? 'error' : ''}`}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p className="error-message">{errors.email.message}</p>}
//         </div>

//         {/* Password Field */}
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               {...register('password')}
//               className={`form-input ${errors.password ? 'error' : ''}`}
//               placeholder="Enter your password"
//             />
//             <button
//               type="button"
//               className="password-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <span role="img" aria-label="Hide Password">
//                   👁️
//                 </span>
//               ) : (
//                 <span role="img" aria-label="Show Password">
//                   👁️‍🗨️
//                 </span>
//               )}
//             </button>
//           </div>
//           {errors.password && <p className="error-message">{errors.password.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="form-button">
//           Sign In
//         </button>
//       </form>

//       <p className="form-footer">
//         Don’t have an account? <a href="/signup">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default SignInForm;