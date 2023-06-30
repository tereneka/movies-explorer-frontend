import React, { useContext } from 'react';
import './Profile.css';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function Profile({ onSubmit, onLogout, error }) {
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
                type='email'
              />
            </label>
            <span className='profile__input-err'>
              {errors.email?.message}
            </span>
          </div>

          <p className='profile__err'>{error}</p>

          <div className='profile__btn-group'>
            <button
              className='profile__btn profile__btn_type_submit'
              type='submit'
              disabled={!isValid}>
              Редактировать
            </button>

            <Link
              className='profile__btn profile__btn_type_cancel'
              to='/'
              onClick={onLogout}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
