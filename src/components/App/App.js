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
import { useState } from 'react';

function App() {
  const [isNavModalOpen, setIsNavModalOpen] =
    useState(false);

  const location = useLocation().pathname;
  const loggedIn = location !== '/'; // временное решение пока нет авторизации
  const isDarkTheme = location === '/';

  const collbacks = {
    toggleNavModal() {
      setIsNavModalOpen(!isNavModalOpen);
    },
  };
  console.log(isNavModalOpen);
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
        toggleNavModal={collbacks.toggleNavModal}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          element={<Movies />}
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
    </div>
  );
}

export default App;
