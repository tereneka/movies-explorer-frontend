import React from 'react';
import './Login.css';
import { useForm } from '../../hooks/useForm';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import { EMAIL_REGEXP } from '../../constants';

function Login({ handleLogin, error, isLoad }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useForm();

  return (
    <AuthLayout
      title='Рады видеть!'
      formName='login'
      isFormValid={isValid}
      error={error}
      onSubmit={(e) => handleLogin(e, values)}
      isLoad={isLoad}>
      <AuthFormInput
        name='email'
        label='E-mail'
        type='text'
        pattern={EMAIL_REGEXP}
        value={values.email}
        onChange={handleChange}
        errMessage={
          errors.email?.validity.patternMismatch
            ? 'Введите email.'
            : errors.email?.message
        }
        disabled={isLoad}
      />
      <AuthFormInput
        name='password'
        label='Пароль'
        type='password'
        value={values.password}
        minLength={8}
        onChange={handleChange}
        errMessage={errors.password?.message}
        disabled={isLoad}
      />
    </AuthLayout>
  );
}

export default Login;
