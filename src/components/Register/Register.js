import React from 'react';
import './Register.css';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import { useForm } from '../../hooks/useForm';

function Register({ handleRegister }) {
  const {
    values,
    handleChange,
    errMessages,
    isTouched,
  } = useForm([
    { name: 'name' },
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
      title='Добро пожаловать!'
      formName='register'
      isFormValid={isFormValid}
      onSubmit={(e) => handleRegister(e, values)}>
      <AuthFormInput
        name='name'
        label='Имя'
        type='text'
        value={values.name}
        minLength={2}
        onChange={handleChange}
        errMessage={errMessages.name}
      />
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

export default Register;
