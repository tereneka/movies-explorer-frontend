const techs = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

const portfoloiList = [
  {
    text: 'Статичный сайт',
    link: 'https://tereneka.github.io/how-to-learn/',
  },
  {
    text: 'Адаптивный сайт',
    link: 'https://tereneka.github.io/rus-travel-guide/',
  },
  {
    text: 'Одностраничное приложение',
    link: 'https://mesto.tereneka.nomoredomains.monster',
  },
];

const messages = {
  initSearch: 'Введите запрос.',
  notFound: 'Ничего не найдено.',
  noSavedData:
    'У Вас пока нет сохранённых фильмов.',
  searchError:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  loadError:
    'При получении данных произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  conflictError:
    'Пользователь с таким email уже существует',
  defaultError:
    'Что-то пошло не так! Попробуйте ещё раз.',
};

const defaultMoviesPageMessage = {
  text: '',
  isError: false,
};

const userNameRegexp =
  '^[A-Za-zА-Яа-яЁё\\-\\s]+$';

export {
  techs,
  portfoloiList,
  messages,
  defaultMoviesPageMessage,
  userNameRegexp,
};
