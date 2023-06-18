import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { techs } from '../../constants';

function Techs() {
  return (
    <section className='techs'>
      <SectionTitle text='Технологии' />

      <h3 className='techs__sub-title'>
        7 технологий
      </h3>

      <p className='techs__paragraph'>
        На курсе веб-разработки мы освоили
        технологии, которые применили в дипломном
        проекте.
      </p>

      <ul className='techs__list'>
        {techs.map((item) => (
          <li
            className='techs__list-item'
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Techs;
