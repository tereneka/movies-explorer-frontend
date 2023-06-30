import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({
  isNavModalOpen,
  toggleNavModal,
  isDarkTheme,
}) {
  return (
    <div className='navigation'>
      <button
        className={`navigation__burger-btn ${
          isNavModalOpen
            ? 'navigation__burger-btn_invisible'
            : ''
        } ${
          isDarkTheme
            ? 'navigation__burger-btn_theme_dark'
            : ''
        }`}
        onClick={() => toggleNavModal(true)}
      />
      <div
        className={`navigation__container ${
          isNavModalOpen
            ? 'navigation__container_visible'
            : ''
        } ${
          isDarkTheme
            ? 'navigation__container_theme_dark'
            : ''
        }`}>
        <button
          className={`navigation__close-btn ${
            isDarkTheme
              ? 'navigation__close-btn_theme_dark'
              : ''
          }`}
          onClick={() => toggleNavModal(false)}
        />
        <nav>
          <ul className='navigation__list'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navigation__link navigation__link_optional ${
                    isActive
                      ? 'navigation__link_active'
                      : ''
                  } ${
                    isDarkTheme && isActive
                      ? 'navigation__link_theme_dark'
                      : ''
                  }`
                }
                to='/'
                onClick={() =>
                  toggleNavModal(false)
                }>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navigation__link ${
                    isActive
                      ? 'navigation__link_active'
                      : ''
                  }`
                }
                to='/movies'
                onClick={() =>
                  toggleNavModal(false)
                }>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navigation__link ${
                    isActive
                      ? 'navigation__link_active'
                      : ''
                  }`
                }
                to='/saved-movies'
                onClick={() =>
                  toggleNavModal(false)
                }>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link
          className={`navigation__link navigation__account-link ${
            isDarkTheme
              ? 'navigation__account-link_theme_dark'
              : ''
          }`}
          to='/profile'
          onClick={() => toggleNavModal(false)}>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
