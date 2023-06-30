import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  list,
  cardBtnType,
  cardBtnText,
  onCardClick,
  onCardAction,
}) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {list.map((card) => (
          <MoviesCard
            card={card}
            btnType={cardBtnType(card)}
            btnText={cardBtnText(card)}
            onCardClick={onCardClick}
            onAction={onCardAction}
            key={card.movieId}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
