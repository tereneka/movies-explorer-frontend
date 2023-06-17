import React from 'react';
import './Login.css';
import { useForm } from '../../hooks/useForm';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

function Login({ handleLogin }) {
  const {
    values,
    handleChange,
    errMessages,
    isTouched,
  } = useForm([
    { name: 'email' },
    { name: 'password' },
  ]);
  const isFormValid =
    !Object.values(errMessages).some(
      (err) => err
    ) &&
    Object.values(isTouched).some((item) => item);

  return (
    <AuthLayout
      title='Рады видеть!'
      formName='login'
      isFormValid={isFormValid}
      onSubmit={(e) => handleLogin(e, values)}>
      <AuthFormInput
        name='email'
        label='E-mail'
        type='email'
        value={values.email}
        onChange={handleChange}
        errMessage={errMessages.email}
      />
      <AuthFormInput
        name='password'
        label='Пароль'
        type='password'
        value={values.password}
        minLength={8}
        onChange={handleChange}
        errMessage={errMessages.password}
      />
    </AuthLayout>
  );
}

export default Login;
