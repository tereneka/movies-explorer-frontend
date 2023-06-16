import React from 'react';
import './MoviesCard.css';

function MoviesCard({ card, btnType, onAction }) {
  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <h3 className='movies-card__name'>
          {card.nameRu}
        </h3>
        <p className='movies-card__duration'>
          {card.duration} минут
        </p>
      </div>
      <img
        className='movies-card__img'
        src={card.image}
        alt={card.nameRu}
      />
      <div className='movies-card__footer'>
        <button
          className={`movies-card__btn movies-card__btn_type_${btnType}`}
          onClick={() => onAction(card)}>
          {btnType === 'save' && 'Сохранить'}
        </button>
      </div>
    </li>
  );
}

export default MoviesCard;
