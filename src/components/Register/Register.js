import React from 'react';
import './Register.css';
import AuthLayout from '../AuthLayout/AuthLayout';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import { useForm } from '../../hooks/useForm';
import {
  EMAIL_REGEXP,
  USER_NAME_REGEXP,
} from '../../constants';

function Register({
  handleRegister,
  error,
  isLoad,
}) {
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
      onSubmit={(e) => handleRegister(e, values)}
      isLoad={isLoad}>
      <AuthFormInput
        name='name'
        label='Имя'
        type='text'
        value={values.name}
        minLength={2}
        pattern={USER_NAME_REGEXP}
        onChange={handleChange}
        errMessage={
          errors.name?.validity.patternMismatch
            ? 'Текст может содержать только латиницу, кириллицу, пробел или дефис.'
            : errors.name?.message
        }
        disabled={isLoad}
      />
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

export default Register;
