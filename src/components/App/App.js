import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
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
  defaultMoviesPageMessage,
  messages,
} from '../../constants';
import {
  calculateCardsPageNumber,
  calculateCardsPerPage,
  checkMoviesList,
  searchMovies,
  toggleMovies,
} from '../../utils/utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import { moviesApi } from '../../utils/moviesApi';
import { mainApi } from '../../utils/mainApi';
import { UserContext } from '../../contexts/UserContext';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const moviesStorageData = JSON.parse(
    sessionStorage.getItem('search')
  );
  const savedMoviesStorageData = JSON.parse(
    sessionStorage.getItem('search_saved')
  );

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [isAppLoad, setIsAppLoad] =
    useState(true);
  const [isAlertVisible, setIsAlertVisible] =
    useState(false);
  const [isNavModalOpen, setIsNavModalOpen] =
    useState(false);
  const [serverError, setServerError] =
    useState('');
  // стейты для списка фильмов
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
  const [isMoviesLoad, setIsMoviesLoad] =
    useState(false);
  const [
    isSavedMoviesLoad,
    setIsSavedMoviesLoad,
  ] = useState(false);
  const [
    moviesPageMessage,
    setMoviesPageMessage,
  ] = useState(defaultMoviesPageMessage);
  // стейты для вычисления количества карточек фильмов на странице
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
  // стейты для списка фильмов
  const [savedMoviesList, setSavedMoviesList] =
    useState([]);
  const [
    renderedSavedMoviesList,
    setRenderedSavedMoviesList,
  ] = useState([]);
  const [
    savedMoviesPageMessage,
    setSavedMoviesPageMessage,
  ] = useState(defaultMoviesPageMessage);

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
        setMoviesPageMessage(
          defaultMoviesPageMessage
        );
        const checkedMovies = checkMoviesList(
          moviesList,
          savedMoviesList
        );
        const filteredMovies = toggleMovies(
          checkedMovies,
          values.switch
        );
        setSeachedMoviesList(checkedMovies);
        setToggledMoviesList(filteredMovies);
        if (filteredMovies.length < 1) {
          setMoviesPageMessage({
            text: messages.notFound,
            isError: false,
          });

          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...values,
              moviesList: checkedMovies,
              message: {
                text: messages.notFound,
                isError: false,
              },
            })
          );
        } else if (
          savedMoviesPageMessage.isError
        ) {
          setMoviesPageMessage({
            text: messages.searchError,
            isError: true,
          });

          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...values,
              moviesList: checkedMovies,
              message: {
                text: messages.searchError,
                isError: true,
              },
            })
          );
        } else {
          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...values,
              moviesList: checkedMovies,
              message: defaultMoviesPageMessage,
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
            setMoviesPageMessage({
              text: messages.searchError,
              isError: true,
            });

            sessionStorage.setItem(
              'search',
              JSON.stringify({
                ...values,
                moviesList: [],
                message: {
                  text: messages.searchError,
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
      if (moviesStorageData) {
        setMoviesPageMessage(
          defaultMoviesPageMessage
        );
        const toggledMovies = toggleMovies(
          seachedMoviesList,
          switchValue
        );
        setToggledMoviesList(toggledMovies);
        if (toggledMovies.length < 1) {
          setMoviesPageMessage({
            text: messages.notFound,
            isError: false,
          });

          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...moviesStorageData,
              switch: switchValue,
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
              ...moviesStorageData,
              switch: switchValue,
            })
          );
        }
      }
    },

    handleSearchSavedMovies(e, values) {
      e.preventDefault();
      setSavedMoviesPageMessage(
        defaultMoviesPageMessage
      );
      const moviesList = toggleMovies(
        searchMovies(
          savedMoviesList,
          values.keywords
        ),
        values.switch
      );
      setRenderedSavedMoviesList(moviesList);

      if (moviesList.length < 1) {
        setSavedMoviesPageMessage({
          text: messages.notFound,
          isError: false,
        });

        sessionStorage.setItem(
          'search_saved',
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
          'search_saved',
          JSON.stringify({
            ...values,
            moviesList,
            message: defaultMoviesPageMessage,
          })
        );
      }
    },

    handleToggleSavedMovies(switchValue) {
      setSavedMoviesPageMessage(
        defaultMoviesPageMessage
      );
      const toggledMovies =
        savedMoviesStorageData?.keywords
          ? toggleMovies(
              searchMovies(
                savedMoviesList,
                savedMoviesStorageData.keywords
              ),
              switchValue
            )
          : toggleMovies(
              savedMoviesList,
              switchValue
            );
      setRenderedSavedMoviesList(toggledMovies);

      if (toggledMovies.length < 1) {
        setSavedMoviesPageMessage({
          text: messages.notFound,
          isError: false,
        });

        sessionStorage.setItem(
          'search_saved',
          JSON.stringify({
            keywords:
              savedMoviesStorageData?.keywords ||
              '',
            switch: switchValue,
            moviesList: toggledMovies,
            message: {
              text: messages.notFound,
              isError: false,
            },
          })
        );
      } else {
        sessionStorage.setItem(
          'search_saved',
          JSON.stringify({
            keywords:
              savedMoviesStorageData?.keywords ||
              '',
            switch: switchValue,
            moviesList: toggledMovies,
            message: defaultMoviesPageMessage,
          })
        );
      }
    },

    hadleResetSearch(setValues) {
      setValues({
        keywords: '',
        switch: moviesStorageData.switch,
      });
    },

    hadleResetSavedSearch(setValues) {
      setSavedMoviesPageMessage(
        defaultMoviesPageMessage
      );
      setRenderedSavedMoviesList(savedMoviesList);
      sessionStorage.removeItem('search_saved');
      setValues({
        keywords: '',
        switch: true,
      });
    },

    handleMovieCardSave(card) {
      const newCard = { ...card };
      delete newCard.type;

      mainApi
        .saveMovie(newCard)
        .then((data) => {
          const newMoviesList = [
            ...toggledMoviesList,
            (toggledMoviesList.find(
              (movie) =>
                movie.movieId === data.movieId
            ).type = 'saved'),
          ];
          const newSavedMoviesList = [
            data,
            ...savedMoviesList,
          ];

          setSavedMoviesList(newSavedMoviesList);
          setRenderedSavedMoviesList(
            newSavedMoviesList
          );
          setToggledMoviesList(newMoviesList);
          sessionStorage.setItem(
            'search',
            JSON.stringify({
              ...moviesStorageData,
              moviesList: newMoviesList,
            })
          );
          setSavedMoviesPageMessage(
            defaultMoviesPageMessage
          );
          sessionStorage.removeItem(
            'search_saved'
          );
        })
        .catch(() => {
          setServerError(messages.defaultError);
          setIsAlertVisible(true);
          setTimeout(() => {
            setServerError('');
            setIsAlertVisible(false);
          }, 2000);
        });
    },

    handleMovieCardDelete(card) {
      const id =
        card._id ||
        savedMoviesList.find(
          (movie) =>
            movie.movieId === card.movieId
        )._id;
      mainApi
        .deleteMovie(id)
        .then(() => {
          if (moviesStorageData) {
            const newMoviesList = [
              ...toggledMoviesList,
              (toggledMoviesList.find(
                (movie) =>
                  movie.movieId === card.movieId
              ).type = 'save'),
            ];

            setToggledMoviesList(newMoviesList);
            sessionStorage.setItem(
              'search',
              JSON.stringify({
                ...moviesStorageData,
                moviesList: newMoviesList,
              })
            );
          }

          function filterSavedMoviesList(list) {
            return [
              ...list.filter(
                (movie) =>
                  movie.movieId !== card.movieId
              ),
            ];
          }
          setSavedMoviesList(
            filterSavedMoviesList(savedMoviesList)
          );
          setRenderedSavedMoviesList(
            filterSavedMoviesList(
              renderedSavedMoviesList
            )
          );
        })
        .catch(() => {
          setServerError(messages.defaultError);
          setIsAlertVisible(true);
          setTimeout(() => {
            setServerError('');
            setIsAlertVisible(false);
          }, 2000);
        });
    },

    handleMovieCardClick(e, card, btnRef) {
      if (e.target !== btnRef.current) {
        window.open(card.trailerLink, '_blank');
      }
    },

    handleMoreBtnClick() {
      setMoviesPage(moviesPage + 1);
    },

    handleRegister(e, values) {
      e.preventDefault();
      mainApi
        .register(values)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setUser(data);
            navigate('/movies');
          }
        })
        .catch((err) =>
          setServerError(
            err === 409
              ? messages.conflictError
              : messages.defaultError
          )
        );
    },

    handleLogin(e, values) {
      e.preventDefault();
      mainApi
        .login(values)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setUser(data);
            navigate('/movies');
          }
        })
        .catch((err) =>
          setServerError(
            err === 401
              ? 'Неверный email или пароль. Попробуйте ещё раз.'
              : messages.defaultError
          )
        );
    },

    handleLogout() {
      mainApi
        .logout()
        .then(() => {
          setLoggedIn(false);
          setUser({});
          sessionStorage.clear();
        })
        .catch(() =>
          setServerError(messages.defaultError)
        );
    },

    handleEditProfile(e, values) {
      e.preventDefault();
      mainApi
        .editProfile(values)
        .then((data) => setUser(data))
        .catch(() =>
          setServerError(messages.defaultError)
        );
    },
  };

  useEffect(() => {
    // проверка авторизации пользователя
    mainApi
      .getUser()
      .then((data) => {
        setUser(data);
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => setIsAppLoad(false));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      // загрузка сохранённых фильмов
      setIsSavedMoviesLoad(true);
      mainApi
        .getMovies()
        .then((data) => {
          setSavedMoviesList(data);
          if (savedMoviesStorageData) {
            setRenderedSavedMoviesList(
              savedMoviesStorageData.moviesList
            );
            setSavedMoviesPageMessage({
              text: savedMoviesStorageData.message
                .text,
              isError:
                savedMoviesStorageData.message
                  .isError,
            });
          } else {
            setRenderedSavedMoviesList(data);
          }
          setRenderedSavedMoviesList(data);
          if (data.length < 1) {
            setSavedMoviesPageMessage({
              text: messages.noSavedData,
              isError: false,
            });
          }
        })
        .catch(() => {
          setSavedMoviesPageMessage({
            text: messages.loadError,
            isError: true,
          });
        })
        .finally(() =>
          setIsSavedMoviesLoad(false)
        );

      // получение данных из локального хранилища
      if (moviesStorageData) {
        setSeachedMoviesList(
          moviesStorageData.moviesList
        );
        setToggledMoviesList(
          toggleMovies(
            moviesStorageData.moviesList,
            moviesStorageData.switch
          )
        );

        if (
          moviesStorageData?.message?.isError &&
          moviesStorageData?.moviesList?.length <
            1
        ) {
          callbacks.handleSearchMovies(null, {
            keywords: moviesStorageData.keywords,
            switch: moviesStorageData.switch,
          });
        }
        setMoviesPageMessage(
          moviesStorageData.message
        );
      } else {
        setMoviesPageMessage({
          text: messages.initSearch,
          isError: false,
        });
      }
      // вычисление количества карточек в зависимости от ширины экрана
      setMoviesCardsPerPage(
        calculateCardsPerPage()
      );
    }
  }, [loggedIn]);

  // вычисление количества "страниц" для карточек
  useEffect(() => {
    setMoviesCardsPageNumber(
      calculateCardsPageNumber(
        toggledMoviesList,
        moviesCardsPerPage
      )
    );
  }, [toggledMoviesList, moviesCardsPerPage]);

  // вычисление количества карточек для рендеренга
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

  useEffect(() => {
    // очистка стэйта ошибки при смене страницы
    setServerError('');
  }, [location]);

  // персчёт количества карточек при изменении ширины экрана
  window.addEventListener('resize', () =>
    setTimeout(() => {
      setMoviesCardsPerPage(
        calculateCardsPerPage()
      );
    }, 1000)
  );

  return (
    <UserContext.Provider value={user}>
      <div className='app'>
        {isAppLoad ? (
          <Preloader />
        ) : (
          <>
            <div
              className={`app__cover ${
                isNavModalOpen
                  ? 'app__cover_visible'
                  : ''
              }`}
            />
            <div
              className={`app__alert ${
                isAlertVisible
                  ? 'app__alert_visible'
                  : ''
              }`}>
              {serverError}
            </div>

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
                <Route
                  path='/'
                  element={<Main />}
                />
                <Route
                  element={
                    loggedIn ? (
                      <Outlet />
                    ) : (
                      <Navigate to={'/'} />
                    )
                  }>
                  <Route
                    path='/movies'
                    element={
                      <Movies
                        moviesList={
                          renderedMoviesList
                        }
                        onSearchMovies={
                          callbacks.handleSearchMovies
                        }
                        onToggleMovies={
                          callbacks.handleToggleMovies
                        }
                        onResetSearchResult={
                          callbacks.hadleResetSearch
                        }
                        onCardClick={
                          callbacks.handleMovieCardClick
                        }
                        onCardAction={(card) =>
                          card.type === 'saved'
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
                        isLoad={
                          isMoviesLoad ||
                          isSavedMoviesLoad
                        }
                        page={moviesPage}
                        message={
                          moviesPageMessage
                        }
                      />
                    }
                  />
                  <Route
                    path='/saved-movies'
                    element={
                      <SavedMovies
                        moviesList={
                          renderedSavedMoviesList
                        }
                        onSearchFormSubmit={
                          callbacks.handleSearchSavedMovies
                        }
                        onToggleMovies={
                          callbacks.handleToggleSavedMovies
                        }
                        onResetSearchResult={
                          callbacks.hadleResetSavedSearch
                        }
                        onCardClick={
                          callbacks.handleMovieCardClick
                        }
                        onCardAction={
                          callbacks.handleMovieCardDelete
                        }
                        isLoad={isSavedMoviesLoad}
                        message={
                          savedMoviesPageMessage
                        }
                      />
                    }
                  />
                  <Route
                    path='/profile'
                    element={
                      <Profile
                        onSubmit={
                          callbacks.handleEditProfile
                        }
                        onLogout={
                          callbacks.handleLogout
                        }
                        error={serverError}
                      />
                    }
                  />
                </Route>

                <Route
                  element={
                    loggedIn ? (
                      <Navigate to={'/'} />
                    ) : (
                      <Outlet />
                    )
                  }>
                  <Route
                    path='/signup'
                    element={
                      <Register
                        handleRegister={
                          callbacks.handleRegister
                        }
                        error={serverError}
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
                        error={serverError}
                      />
                    }
                  />
                </Route>

                <Route
                  path='*'
                  element={<ErrorPage />}
                />
              </Routes>
            </div>

            {isFooter && <Footer />}
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
