import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х
        BeatFilm.
      </h2>

      <div className='footer__container'>
        <p className='footer__date'>
          &copy; {new Date().getFullYear()}
        </p>

        <ul className='footer__list'>
          <li>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru/'
              target='_blank'>
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/tereneka'
              target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
