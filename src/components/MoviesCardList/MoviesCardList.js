import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  list,
  cardBtnType,
  onCardAction,
}) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {list.map((card) => (
          <MoviesCard
            card={card}
            key={card.movieId}
            btnType={cardBtnType(card)}
            onAction={onCardAction}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
