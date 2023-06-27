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
  messages,
  moviesCardList,
  savedMoviesCardList,
} from '../../constants';
import {
  calculateCardsPerPage,
  checkMoviesList,
  searchMovies,
  toggleMovies,
} from '../../utils/utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import { moviesApi } from '../../utils/moviesApi';

function App() {
  const [isNavModalOpen, setIsNavModalOpen] =
    useState(false);

  const moviesStorageData = JSON.parse(
    sessionStorage.getItem('search')
  );
  const [moviesData, setMoviesData] = useState(
    []
  );
  const [
    seachedMoviesList,
    setSeachedMoviesList,
  ] = useState([]);
  const [
    toggledMoviesList,
    setToggledMoviesList,
  ] = useState([]);
  const [
    renderedMoviesList,
    setRenderedMoviesList,
  ] = useState([]);

  const [savedMoviesList, setSavedMoviesList] =
    useState(savedMoviesCardList);

  const [isMoviesLoad, setIsMoviesLoad] =
    useState(false);

  const [message, setMessage] = useState({
    text: '',
    isError: false,
  });

  const [
    moviesCardsPerPage,
    setMoviesCardsPerPage,
  ] = useState({
    initial: 0,
    additional: 0,
  });

  const [
    moviesCardsPageNumber,
    setMoviesCardsPageNumber,
  ] = useState(0);

  const [moviesPage, setMoviesPage] = useState(1);

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
    toggleNavModal(bool) {
      setIsNavModalOpen(bool);
    },

    handleSearchMovies(e, values) {
      e?.preventDefault();
      let moviesList;

      function setData() {
        setMessage({ text: '', isError: false });
        const filteredMovies = toggleMovies(
          moviesList,
          values.switch
        );
        setSeachedMoviesList(moviesList);
        setToggledMoviesList(filteredMovies);
        if (filteredMovies.length < 1) {
          setMessage({
            text: messages.notFound,
            isError: false,
          });

          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...values,
              moviesList,
              message: {
                text: messages.notFound,
                isError: false,
              },
            })
          );
        } else {
          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...values,
              moviesList,
              message: {
                text: '',
                isError: false,
              },
            })
          );
        }
      }

      if (moviesData.length < 1) {
        setIsMoviesLoad(true);
        moviesApi
          .getMovies()
          .then((data) => {
            moviesList = searchMovies(
              data,
              values.keywords
            );
            setMoviesData(data);
            setData();
          })
          .catch(() => {
            setMessage({
              text: messages.serverError,
              isError: true,
            });

            sessionStorage.setItem(
              'search',
              JSON.stringify({
                ...values,
                moviesList: [],
                message: {
                  text: messages.serverError,
                  isError: true,
                },
              })
            );
          })
          .finally(() => setIsMoviesLoad(false));
      } else {
        moviesList = searchMovies(
          moviesData,
          values.keywords
        );
        setData();
      }

      setMoviesPage(1);
    },

    handleToggleMovies(switchValue) {
      setToggledMoviesList(
        toggleMovies(
          seachedMoviesList,
          switchValue
        )
      );

      if (moviesStorageData) {
        sessionStorage.setItem(
          'search',
          JSON.stringify({
            keywords: moviesStorageData.keywords,
            switch: switchValue,
            moviesList: toggledMoviesList,
          })
        );
      }
    },

    hadleResetSearch(
      values,
      isSearchFocus,
      list,
      callback
    ) {
      // if (
      //   !values.search &&
      //   !isSearchFocus.search
      // ) {
      //   setIsMoreBtn(
      //     page < moviesCardList.length
      //   );
      //   callback(list);
      // }
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
      setMoviesPage(moviesPage + 1);
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
    if (moviesStorageData) {
      setToggledMoviesList(
        moviesStorageData.moviesList
      );

      if (moviesStorageData.message.isError) {
        callbacks.handleSearchMovies(null, {
          keywords: moviesStorageData.keywords,
          switch: moviesStorageData.switch,
        });
      }
      setMessage(moviesStorageData.message);
    } else {
      setMessage({
        text: messages.initSearch,
        isError: false,
      });
    }

    setMoviesCardsPerPage(
      calculateCardsPerPage()
    );
  }, []);

  useEffect(() => {
    const num =
      toggledMoviesList.length >
      moviesCardsPerPage.initial
        ? Math.ceil(
            (toggledMoviesList.length -
              moviesCardsPerPage.initial) /
              moviesCardsPerPage.additional +
              1
          )
        : 1;
    setMoviesCardsPageNumber(num);
  }, [toggledMoviesList, moviesCardsPerPage]);

  useEffect(() => {
    const end =
      moviesCardsPerPage.initial +
      moviesCardsPerPage.additional *
        (moviesPage - 1);

    setRenderedMoviesList(
      toggledMoviesList.slice(0, end)
    );
  }, [
    moviesCardsPerPage,
    toggledMoviesList,
    moviesPage,
  ]);

  window.addEventListener('resize', () =>
    setTimeout(() => {
      setMoviesCardsPerPage(
        calculateCardsPerPage()
      );
    }, 2000)
  );

  // useEffect(() => {
  //   setIsMoviesLoad(true);
  //   // имитация загрузки данных
  //   setTimeout(() => {
  //     setToggledMoviesList([
  //       ...moviesList,
  //       ...checkMoviesList(
  //         moviesCardList[page - 1],
  //         savedMoviesList
  //       ),
  //     ]);
  //     setIsMoviesLoad(false);
  //   }, 800);
  // }, [page]);

  // useEffect(() => {
  //   if (moviesList.length > 0) {
  //     setToggledMoviesList([
  //       ...checkMoviesList(
  //         moviesList,
  //         savedMoviesList
  //       ),
  //     ]);
  //   }
  // }, [savedMoviesList]);

  return (
    <div className='app'>
      <div
        className={`app__cover ${
          isNavModalOpen
            ? 'app__cover_visible'
            : ''
        }`}
      />

      <div>
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
                moviesList={renderedMoviesList}
                onSearchMovies={
                  callbacks.handleSearchMovies
                }
                onToggleMovies={
                  callbacks.handleToggleMovies
                }
                onResetSearchResult={(
                  values,
                  isSearchFocus
                ) =>
                  callbacks.hadleResetSearch(
                    values,
                    isSearchFocus,
                    moviesCardList[0],
                    setToggledMoviesList
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
                hasMoreBtn={
                  moviesPage <
                  moviesCardsPageNumber
                }
                onMoreBtnClick={
                  callbacks.handleMoreBtnClick
                }
                isLoad={isMoviesLoad}
                page={moviesPage}
                message={message}
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
                page={moviesPage}
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
                handleLogin={
                  callbacks.handleLogin
                }
              />
            }
          />
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </div>

      {isFooter && <Footer />}
    </div>
  );
}

export default App;
