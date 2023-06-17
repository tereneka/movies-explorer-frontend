import React from 'react';
import './Profile.css';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';

function Profile({ user, onSubmit }) {
  const {
    values,
    handleChange,
    errMessages,
    isTouched,
  } = useForm([
    { name: 'name', defaultValue: user.name },
    { name: 'email', defaultValue: user.email },
  ]);
  const isFormValid =
    !Object.values(errMessages).some(
      (err) => err
    ) &&
    Object.values(isTouched).some((item) => item);

  return (
    <main>
      <div className='profile'>
        <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>

        <form
          className='profile__form'
          name='profile'
          onSubmit={(e) => onSubmit(e, values)}
          noValidate>
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
            {errMessages.name}
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
            {errMessages.email}
          </span>

          <div className='profile__btn-group'>
            <button
              className='profile__btn profile__btn_type_submit'
              type='submit'
              disabled={!isFormValid}>
              Редактировать
            </button>

            <Link
              className='profile__btn profile__btn_type_cancel'
              to='/movies'>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
