import React from 'react';
import './Login.css';
import { useForm } from '../../hooks/useForm';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

function Login({ handleLogin, error }) {
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
      onSubmit={(e) => handleLogin(e, values)}>
      <AuthFormInput
        name='email'
        label='E-mail'
        type='email'
        value={values.email}
        onChange={handleChange}
        errMessage={errors.email?.message}
      />
      <AuthFormInput
        name='password'
        label='Пароль'
        type='password'
        value={values.password}
        minLength={8}
        onChange={handleChange}
        errMessage={errors.password?.message}
      />
    </AuthLayout>
  );
}

export default Login;
