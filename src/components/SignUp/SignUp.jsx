import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import css from './SignUp.module.css';
import { useState } from 'react';
import { Icon } from '../Icon/Icon.jsx';

function SignUpForm() {
  const [showPwd, setShowPwd] = useState(false);
  const [showRepeatPwd, setShowRepeatPwd] = useState(false);

  const togglePwdVisibility = () => setShowPwd(prev => !prev);
  const toggleRepeatPwdVisibility = () => setShowRepeatPwd(prev => !prev);

  return (
    <div className={css.formUp}>
      <h2 className={css.titleUp}>Sign Up</h2>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div>
            <label htmlFor="email" className={css.labelUp}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={css.inputUp}
            />
          </div>
          <div>
            <label htmlFor="password" className={css.labelUp}>
              Password
            </label>
            <div className={css.inputWrapper}>
              <Field
                type={showPwd ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className={css.inputUp}
              />
              <Icon
                id={showPwd ? 'icon-eye' : 'icon-eye-off'}
                size={20}
                className={css.icon}
                onClick={togglePwdVisibility}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className={css.labelUp}>
              Repeat password
            </label>
            <div className={css.inputWrapper}>
              <Field
                type={showRepeatPwd ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Repeat password"
                className={css.inputUp}
              />
              <Icon
                id={showRepeatPwd ? 'icon-eye' : 'icon-eye-off'}
                size={20}
                className={css.icon}
                onClick={toggleRepeatPwdVisibility}
              />
            </div>
          </div>
          <button type="submit" className={css.btnUp}>
            Sign Up
          </button>
        </Form>
      </Formik>
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
