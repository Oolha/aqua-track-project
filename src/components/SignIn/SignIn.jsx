import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Icon } from '../Icon/Icon.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import css from './SignIn.module.css'; // Стилі форми
import { useDispatch } from 'react-redux';
import { fetchSignIn } from '../../redux/auth/operations.js';
import { useTranslation } from 'react-i18next';

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

function SignInForm() {
  const { t } = useTranslation();
  const [showPwd, setShowPwd] = useState(false);
  const [notification, setNotification] = useState(null); // Для повідомлень
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      await dispatch(fetchSignIn(data)).unwrap();

      reset();
      navigate('/tracker');
    } catch (error) {
      const errorMessage =
        error?.message || t('signIn.failedLogin'); // Используем перевод для сообщения об ошибке

      setNotification(errorMessage);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <>
      <div className={css.loginContainer}>
        <Logo />
        <div className={css.formWrapper}>
          <h2 className={css.title}>{t('signIn.title')}</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={css.form}
            noValidate
          >
            <div className={css.field}>
              <label htmlFor="email" className={css.formLabel}>
                {t('signIn.email')}
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder={t('signIn.placeholderEmail')}
                className={`${css.formInput} ${errors.email ? css.error : ''}`}
              />
              {errors.email && (
                <p className={css.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div className={css.field}>
              <label htmlFor="password" className={css.formLabel}>
                {t('signIn.password')}
              </label>
              <div className={css.passwordWrapper}>
                <input
                  {...register('password')}
                  type={showPwd ? 'text' : 'password'}
                  placeholder={t('signIn.placeholderPassword')}
                  className={`${css.formInput} ${
                    errors.password ? css.error : ''
                  }`}
                />

                <button
                  type="button"
                  className={css.passwordToggle}
                  onClick={togglePwdVisibility}
                  aria-label={showPwd ? t('signIn.hidePassword') : t('signIn.showPassword')}
                >
                  <Icon
                    id={showPwd ? 'icon-eye' : 'icon-eye-off'}
                    size={20}
                    className={css.iconEye}
                  />
                </button>
              </div>
            </div>
            {errors.password && (
              <p className={css.errorMessage}>{errors.password.message}</p>
            )}
            <div className={css.btnWrapper}>
              <button type="submit" className={css.formButton}>
                {t('homepage.welcome.signInBtn')}
              </button>
            </div>
          </form>

          <div>
            <p className={css.signinText}>
              {t('signIn.account')}{' '}
              <Link to="/signup" className={css.signupLink}>
                {t('signIn.signUp')}
              </Link>
            </p>
          </div>
        </div>

        {notification && <div className={css.notification}>{notification}</div>}
      </div>
    </>
  );
}

export default SignInForm;