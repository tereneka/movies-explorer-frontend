import React from 'react';
import './AuthBar.css';
import { Link } from 'react-router-dom';

function AuthBar() {
  return (
    <nav className='auth-bar'>
      <ul className='auth-bar__list'>
        <li>
          <Link
            className='auth-bar__link'
            to='/signup'>
            Регистрация
          </Link>
        </li>
        <li>
          <Link
            className='auth-bar__link  auth-bar__link_type_btn'
            to='/signin'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthBar;
