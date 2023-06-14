import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/photo.JPG';

function AboutMe() {
  return (
    <section className='about-me'>
      <SectionTitle text='Студент' />

      <div className='about-me__profile'>
        <div className='about-me__profile-info'>
          <div>
            <h3 className='about-me__name'>
              Екатерина
            </h3>

            <p className='about-me__profession'>
              Фронтенд-разработчик, 41 год
            </p>
            <p className='about-me__description'>
              Я родился и живу в Саратове,
              закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю
              слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015
              года работал в компании «СКБ
              Контур». После того, как прошёл курс
              по веб-разработке, начал заниматься
              фриланс-заказами и ушёл с постоянной
              работы.
            </p>
          </div>

          <a
            className='about-me__gh-link'
            href='https://github.com/tereneka'
            target='_blank'>
            Github
          </a>
        </div>
        <img
          className='about-me__photo'
          src={photo}
          alt='фотография студента'
        />
      </div>
    </section>
  );
}

export default AboutMe;
