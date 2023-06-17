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

  const [isMoreBtn, setIsMoreBtn] = useState(
    page < moviesCardList.length
  );

  const [user, setUser] = useState({
    name: 'Екатерина',
    email: 'teren-eka@yandex.ru',
  });

  const location = useLocation().pathname;
  const loggedIn = location !== '/'; // временное решение пока нет авторизации
  const isDarkTheme = location === '/';

  const isFooter =
    location === '/' ||
    location === '/movies' ||
    location === '/saved-movies';

  const isHeader =
    location === '/' ||
    location === '/movies' ||
    location === '/saved-movies' ||
    location === '/profile';

  const callbacks = {
    toggleNavModal() {
      setIsNavModalOpen(!isNavModalOpen);
    },

    handleSearchFormSubmit(
      e,
      values,
      list,
      callback
    ) {
      e.preventDefault();
      const searchedMovies = list
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
      setIsMoreBtn(false);
      callback(result);
    },

    hadleResetSearch(
      values,
      isSearchFocus,
      list,
      callback
    ) {
      if (
        !values.search &&
        !isSearchFocus.search
      ) {
        setIsMoreBtn(
          page < moviesCardList.length
        );
        callback(list);
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

    handleEditProfile(e, values) {
      e.preventDefault();
      setUser(values);
    },

    handleRegister(e, values) {
      e.preventDefault();
      console.log(values);
    },

    handleLogin(e, values) {
      e.preventDefault();
      console.log(values);
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

      {isHeader && (
        <Header
          loggedIn={loggedIn}
          isDarkTheme={isDarkTheme}
          isNavModalOpen={isNavModalOpen}
          toggleNavModal={
            callbacks.toggleNavModal
          }
        />
      )}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={
            <Movies
              moviesList={moviesList}
              onSearchFormSubmit={(e, values) =>
                callbacks.handleSearchFormSubmit(
                  e,
                  values,
                  moviesCardList,
                  setMoviesList
                )
              }
              onResetSearchResult={(
                values,
                isSearchFocus
              ) =>
                callbacks.hadleResetSearch(
                  values,
                  isSearchFocus,
                  moviesCardList[0],
                  setMoviesList
                )
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
              hasMore={isMoreBtn}
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
          element={
            <SavedMovies
              moviesList={savedMoviesList}
              onSearchFormSubmit={(e, values) =>
                callbacks.handleSearchFormSubmit(
                  e,
                  values,
                  savedMoviesCardList,
                  setSavedMoviesList
                )
              }
              onResetSearchResult={(
                values,
                isSearchFocus
              ) =>
                callbacks.hadleResetSearch(
                  values,
                  isSearchFocus,
                  savedMoviesCardList,
                  setSavedMoviesList
                )
              }
              onCardAction={
                callbacks.handleMovieCardDelete
              }
              isLoad={isMoviesLoad}
              page={page}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <Profile
              user={user}
              onSubmit={
                callbacks.handleEditProfile
              }
            />
          }
        />
        <Route
          path='/signup'
          element={
            <Register
              handleRegister={
                callbacks.handleRegister
              }
            />
          }
        />
        <Route
          path='/signin'
          element={
            <Login
              handleLogin={callbacks.handleLogin}
            />
          }
        />
      </Routes>

      {isFooter && <Footer />}
    </div>
  );
}

export default App;
