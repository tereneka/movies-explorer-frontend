import React from 'react';
import './AuthLayout.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthLayout({
  title,
  formName,
  isFormValid,
  onSubmit,
  children,
}) {
  const isRegisterForm = formName === 'register';

  return (
    <div className='auth-layout'>
      <header className='auth-layout__header'>
        <Link to={'/'}>
          <img src={logo} alt='логотип' />
        </Link>
        <h2 className='auth-layout__title'>
          {title}
        </h2>
      </header>
      <main>
        <form
          className='auth-layout__form'
          name={formName}
          onSubmit={onSubmit}
          noValidate>
          <div>{children}</div>

          <div className='auth-layout__btn-group'>
            <button
              className='auth-layout__btn'
              type='submit'
              disabled={!isFormValid}>
              {isRegisterForm
                ? 'Зарегистрироваться'
                : 'Войти'}
            </button>

            <p className='auth-layout__link-question'>
              {`${
                isRegisterForm ? 'Уже' : 'Ещё не'
              } зарегестрированы?`}{' '}
              <Link
                className='auth-layout__link'
                to={
                  isRegisterForm
                    ? '/signin'
                    : '/signup'
                }>
                {isRegisterForm
                  ? 'Войти'
                  : 'Регистрация'}
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AuthLayout;
