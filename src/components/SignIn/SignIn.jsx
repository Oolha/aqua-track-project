import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css'; // Стили для оформлення

// Схема валідації Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function SignInForm() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setNotification(null); // Очистка повідомлень
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('authToken', token); // Зберігаємо токен
      navigate('/tracker'); // Перенаправлення на TrackerPage
    } catch (error) {
      setNotification(error.message); // Відображення помилки
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {notification && <div className="notification">{notification}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <span role="img" aria-label="Hide Password">
                  👁️
                </span>
              ) : (
                <span role="img" aria-label="Show Password">
                  👁️‍🗨️
                </span>
              )}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="form-button">
          Sign In
        </button>
      </form>

      <p className="form-footer">
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default SignInForm;