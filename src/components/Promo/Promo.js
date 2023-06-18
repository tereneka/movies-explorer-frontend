import React from 'react';
import './Promo.css';
import logo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета
        Веб-разработки.
      </h1>

      <img
        className='promo__logo'
        src={logo}
        alt='Логотип'
      />
    </section>
  );
}

export default Promo;
