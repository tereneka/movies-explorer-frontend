import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionTitle text='О проекте' />
      <ul className='about-project__description'>
        <li>
          <h3 className='about-project__description-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description-paragraph'>
            Составление плана, работу над
            бэкендом, вёрстку, добавление
            функциональности и финальные
            доработки.
          </p>
        </li>

        <li>
          <h3 className='about-project__description-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description-paragraph'>
            У каждого этапа был мягкий и жёсткий
            дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <ul className='about-project__steps'>
        <li className='about-project__steps-item'>
          <h3 className='about-project__steps-title'>
            1неделя
          </h3>
          <p className='about-project__steps-paragraph'>
            Back-end
          </p>
        </li>

        <li className='about-project__steps-item'>
          <h3 className='about-project__steps-title'>
            4 недели
          </h3>
          <p className='about-project__steps-paragraph'>
            Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
