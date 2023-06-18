import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  moviesList,
  onSearchFormSubmit,
  onResetSearchResult,
  onCardAction,
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
        <MoviesCardList
          list={moviesList}
          cardBtnType={(card) => 'delete'}
          onCardAction={onCardAction}
        />
      )}
    </main>
  );
}

export default SavedMovies;
