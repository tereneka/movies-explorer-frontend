import React from 'react';
import './Portfolio.css';
import { portfoloiList } from '../../constants';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>
        Портфолио
      </h4>

      <ul className='portfolio__list'>
        {portfoloiList.map((item) => (
          <li key={item.text}>
            <a
              className='portfolio__link'
              href={item.link}
              target='_blank'>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
