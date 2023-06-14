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
import { useCallback, useState } from 'react';
import Footer from '../Footer/Footer';
import { moviesCardList } from '../../constants';

function App() {
  const [isNavModalOpen, setIsNavModalOpen] =
    useState(false);

  const [moviesList, setMoviesList] = useState(
    moviesCardList
  );

  const location = useLocation().pathname;
  const loggedIn = location !== '/'; // временное решение пока нет авторизации
  const isDarkTheme = location === '/';

  const callbacks = {
    toggleNavModal() {
      setIsNavModalOpen(!isNavModalOpen);
    },

    handleSearchFormSubmit(e, values) {
      e.preventDefault();
      const searchedMovies =
        moviesCardList.filter((movie) =>
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
        setMoviesList(moviesCardList);
      }
    },
  };
  console.log(moviesList);
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
              onSearchFormSubmit={
                callbacks.handleSearchFormSubmit
              }
              onResetSearchResult={
                callbacks.hadleResetSearch
              }
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
