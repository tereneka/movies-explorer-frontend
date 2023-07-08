import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';

function Movies({
  moviesList,
  onSearchMovies,
  onToggleMovies,
  onResetSearchResult,
  onCardClick,
  onCardAction,
  hasMoreBtn,
  onMoreBtnClick,
  isLoad,
  message,
}) {
  const searchFormValues = JSON.parse(
    localStorage.getItem('search')
  ) || {
    keywords: '',
    switch: false,
  };

  return (
    <main>
      <SearchForm
        defaultValues={searchFormValues}
        onSubmit={onSearchMovies}
        onToggleSwitch={onToggleMovies}
        onResetResult={onResetSearchResult}
        isLoad={isLoad}
      />
      {isLoad ? (
        <Preloader />
      ) : message?.text ? (
        <Message message={message} />
      ) : (
        <>
          <MoviesCardList
            list={moviesList}
            cardBtnType={(card) => card.type}
            cardBtnText={(card) =>
              card.type === 'save'
                ? 'Сохранить'
                : ''
            }
            onCardClick={onCardClick}
            onCardAction={onCardAction}
          />{' '}
          {hasMoreBtn && (
            <More onClick={onMoreBtnClick} />
          )}
        </>
      )}
    </main>
  );
}

export default Movies;
