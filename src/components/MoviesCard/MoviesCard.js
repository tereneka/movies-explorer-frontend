import React, { useRef } from 'react';
import './MoviesCard.css';

function MoviesCard({
  card,
  btnType,
  btnText,
  onCardClick,
  onAction,
}) {
  const btnRef = useRef(null);
  return (
    <li
      className='movies-card'
      onClick={(e) =>
        onCardClick(e, card, btnRef)
      }>
      <div className='movies-card__header'>
        <h3 className='movies-card__name'>
          {card.nameRU}
        </h3>
        <p className='movies-card__duration'>
          {card.duration} минут
        </p>
      </div>
      <img
        className='movies-card__img'
        src={card.image}
        alt={card.nameRU}
      />
      <div className='movies-card__footer'>
        <button
          className={`movies-card__btn movies-card__btn_type_${btnType}`}
          ref={btnRef}
          onClick={(e) => {
            onAction(card);
          }}>
          {btnText}
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;
