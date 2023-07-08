import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import AuthBar from '../AuthBar/AuthBar';

function Header({
  loggedIn,
  isDarkTheme,
  isNavModalOpen,
  toggleNavModal,
}) {
  return (
    <header
      className={`header ${
        isDarkTheme
          ? 'header_theme_dark'
          : 'header_theme_light'
      }`}>
      <Link to='/'>
        <img src={logo} alt='логотип' />
      </Link>
      {loggedIn ? (
        <Navigation
          isNavModalOpen={isNavModalOpen}
          toggleNavModal={toggleNavModal}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <AuthBar />
      )}
    </header>
  );
}

export default Header;
