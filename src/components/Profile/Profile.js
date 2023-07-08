import React, { useContext } from 'react';
import './Profile.css';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { EMAIL_REGEXP } from '../../constants';

function Profile({
  onSubmit,
  onLogout,
  message,
  isLoad,
}) {
  const user = useContext(UserContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm({
    name: user.name,
    email: user.email,
  });

  return (
    <main>
      <div className='profile'>
        <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>

        <form
          className='profile__form'
          name='profile'
          onSubmit={(e) => onSubmit(e, values)}
          noValidate>
          <div>
            <label className='profile__input-label'>
              Имя
              <input
                className='profile__input'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
                minLength={2}
                disabled={isLoad}
              />
            </label>
            <span className='profile__input-err'>
              {errors.name?.validity
                .patternMismatch
                ? 'Текст может содержать только латиницу, кириллицу, пробел или дефис.'
                : errors.name?.message}
            </span>
            <label className='profile__input-label'>
              E-mail
              <input
                className='profile__input'
                name='email'
                value={values.email}
                onChange={handleChange}
                required
                type='text'
                pattern={EMAIL_REGEXP}
                errMessage={
                  errors.email?.validity
                    .patternMismatch
                    ? 'Введите email.'
                    : errors.email?.message
                }
                disabled={isLoad}
              />
            </label>
            <span className='profile__input-err'>
              {errors.email?.message}
            </span>
          </div>

          <p className='profile__err'>
            {message}
          </p>

          <div className='profile__btn-group'>
            <button
              className='profile__btn profile__btn_type_submit'
              type='submit'
              disabled={
                !isValid ||
                (values.name === user.name &&
                  values.email === user.email) ||
                isLoad
              }>
              Редактировать
            </button>

            <Link
              className='profile__btn profile__btn_type_cancel'
              to='/'
              onClick={onLogout}
              aria-disabled={isLoad}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
