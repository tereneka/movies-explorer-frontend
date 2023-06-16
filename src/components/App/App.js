import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import {
  moviesCardList,
  savedMoviesCardList,
} from '../../constants';
import { checkMoviesList } from '../../utils/utils';

function App() {
  const [isNavModalOpen, setIsNavModalOpen] =
    useState(false);

  const [page, setPage] = useState(1);

  const [moviesList, setMoviesList] = useState(
    []
  );

  const [savedMoviesList, setSavedMoviesList] =
    useState(savedMoviesCardList);

  const [isMoviesLoad, setIsMoviesLoad] =
    useState(false);

  const location = useLocation().pathname;
  const loggedIn = location !== '/'; // временное решение пока нет авторизации
  const isDarkTheme = location === '/';

  const callbacks = {
    toggleNavModal() {
      setIsNavModalOpen(!isNavModalOpen);
    },

    handleSearchFormSubmit(e, values) {
      e.preventDefault();
      const searchedMovies = moviesCardList
        .reduce(
          (res, current) => res.concat(current),
          []
        )
        .filter((movie) =>
          movie.nameRu
            .toLowerCase()
            .includes(values.search.toLowerCase())
        );

      const result = values.switch
        ? searchedMovies
        : searchedMovies.filter(
            (movie) => movie.duration > 30
          );

      setMoviesList(result);
    },

    hadleResetSearch(values, isSearchFocus) {
      if (
        !values.search &&
        !isSearchFocus.search
      ) {
        setMoviesList(moviesCardList[page - 1]);
      }
    },

    handleMovieCardSave(card) {
      setSavedMoviesList([
        card,
        ...savedMoviesList,
      ]);
    },

    handleMovieCardDelete(card) {
      setSavedMoviesList([
        ...savedMoviesList.filter(
          (movie) =>
            movie.movieId !== card.movieId
        ),
      ]);
    },

    handleMoreBtnClick() {
      setPage(page + 1);
    },
  };

  useEffect(() => {
    setIsMoviesLoad(true);
    // имитация загрузки данных
    setTimeout(() => {
      setMoviesList([
        ...moviesList,
        ...checkMoviesList(
          moviesCardList[page - 1],
          savedMoviesList
        ),
      ]);
      setIsMoviesLoad(false);
    }, 800);
  }, [page]);

  useEffect(() => {
    if (moviesList.length > 0) {
      setMoviesList([
        ...checkMoviesList(
          moviesList,
          savedMoviesList
        ),
      ]);
    }
  }, [savedMoviesList]);

  return (
    <div className='app'>
      <div
        className={`app__cover ${
          isNavModalOpen
            ? 'app__cover_visible'
            : ''
        }`}
      />
      <Header
        loggedIn={loggedIn}
        isDarkTheme={isDarkTheme}
        isNavModalOpen={isNavModalOpen}
        toggleNavModal={callbacks.toggleNavModal}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={
            <Movies
              moviesList={moviesList}
              onSearchFormSubmit={
                callbacks.handleSearchFormSubmit
              }
              onResetSearchResult={
                callbacks.hadleResetSearch
              }
              onCardAction={(card) =>
                card.isSaved
                  ? callbacks.handleMovieCardDelete(
                      card
                    )
                  : callbacks.handleMovieCardSave(
                      card
                    )
              }
              hasMore={
                page < moviesCardList.length
              }
              onMoreBtnClick={
                callbacks.handleMoreBtnClick
              }
              isLoad={isMoviesLoad}
              page={page}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
