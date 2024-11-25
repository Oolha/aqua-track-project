import { Link } from 'react-router-dom';
import css from './SignUp.module.css';
import { useState } from 'react';
import { Icon } from '../Icon/Icon.jsx';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .min(3, 'Enter a real email!')
    .max(50, 'Too Long!')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Enter a real password!')
    .max(50, 'Too long')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .min(8, 'Enter a real password!')
    .max(50, 'Too long')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

function SignUpForm() {
  const [showPwd, setShowPwd] = useState(false);
  const [showRepeatPwd, setShowRepeatPwd] = useState(false);

  const togglePwdVisibility = () => setShowPwd(prev => !prev);
  const toggleRepeatPwdVisibility = () => setShowRepeatPwd(prev => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Form submitted:', data);
  };

  return (
    <div className={css.formUp}>
      <h2 className={css.titleUp}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className={css.labelUp}>
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.inputUp}
          />
          {errors.email && (
            <p className={css.errorText}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className={css.labelUp}>
            Password
          </label>
          <div className={css.inputWrapper}>
            <input
              {...register('password')}
              type={showPwd ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className={css.inputUp}
            />
            {errors.password && (
              <p className={css.errorText}>{errors.password.message}</p>
            )}
            <button
              className={css.iconButton}
              type="button"
              onClick={togglePwdVisibility}
              aria-label={
                showRepeatPwd ? 'Hide repeat password' : 'Show repeat password'
              }
            >
              <Icon id={showPwd ? 'icon-eye' : 'icon-eye-off'} size={24} />
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="password" className={css.labelUp}>
            Repeat password
          </label>
          <div className={css.inputWrapper}>
            <input
              {...register('repeatPassword')}
              type={showRepeatPwd ? 'text' : 'password'}
              name="repeatPassword"
              placeholder="Repeat password"
              className={css.inputUp}
            />
            {errors.repeatPassword && (
              <p className={css.errorText}>{errors.repeatPassword.message}</p>
            )}
            <button
              className={css.iconButton}
              type="button"
              onClick={toggleRepeatPwdVisibility}
              aria-label={
                showRepeatPwd ? 'Hide repeat password' : 'Show repeat password'
              }
            >
              <Icon
                id={showRepeatPwd ? 'icon-eye' : 'icon-eye-off'}
                size={24}
              />
            </button>
          </div>
        </div>
        <button type="submit" className={css.btnUp}>
          Sign Up
        </button>
      </form>
      <div>
        <p className={css.textUp}>
          Already have account?{' '}
          <Link to="/signin" className={css.linkUp}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
