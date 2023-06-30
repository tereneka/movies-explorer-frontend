import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Message from '../Message/Message';

function SavedMovies({
  moviesList,
  onSearchFormSubmit,
  onToggleMovies,
  onResetSearchResult,
  onCardClick,
  onCardAction,
  isLoad,
  message,
}) {
  const searchFormValues = JSON.parse(
    sessionStorage.getItem('search_saved')
  ) || {
    keywords: '',
    switch: true,
  };

  return (
    <main>
      <SearchForm
        defaultValues={searchFormValues}
        onSubmit={onSearchFormSubmit}
        onToggleSwitch={onToggleMovies}
        onResetResult={onResetSearchResult}
      />
      {isLoad ? (
        <Preloader />
      ) : message.text ? (
        <Message message={message} />
      ) : (
        <MoviesCardList
          list={moviesList}
          cardBtnType={(card) => 'delete'}
          cardBtnText={(card) => ''}
          onCardClick={onCardClick}
          onCardAction={onCardAction}
        />
      )}
    </main>
  );
}

export default SavedMovies;
