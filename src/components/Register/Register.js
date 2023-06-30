import React from 'react';
import './Register.css';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import { useForm } from '../../hooks/useForm';
import { userNameRegexp } from '../../constants';

function Register({ handleRegister, error }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useForm();

  return (
    <AuthLayout
      title='Добро пожаловать!'
      formName='register'
      isFormValid={isValid}
      error={error}
      onSubmit={(e) => handleRegister(e, values)}>
      <AuthFormInput
        name='name'
        label='Имя'
        type='text'
        value={values.name}
        minLength={2}
        pattern={userNameRegexp}
        onChange={handleChange}
        errMessage={
          errors.name?.validity.patternMismatch
            ? 'Текст может содержать только латиницу, кириллицу, пробел или дефис.'
            : errors.name?.message
        }
      />
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

export default Register;
