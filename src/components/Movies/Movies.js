import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';

function Movies({
  moviesList,
  onSearchFormSubmit,
  onResetSearchResult,
  onCardAction,
  hasMore,
  onMoreBtnClick,
  isLoad,
  page,
}) {
  return (
    <main>
      <SearchForm
        onSubmit={onSearchFormSubmit}
        onResetResult={onResetSearchResult}
      />
      {isLoad && page < 2 ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            list={moviesList}
            cardBtnType={(card) =>
              card.isSaved ? 'check' : 'save'
            }
            onCardAction={onCardAction}
          />{' '}
          {hasMore && !isLoad && (
            <More onClick={onMoreBtnClick} />
          )}
          {isLoad && page > 1 && <Preloader />}
        </>
      )}
    </main>
  );
}

export default Movies;
