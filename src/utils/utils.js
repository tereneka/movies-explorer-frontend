function searchMovies(data, keywords) {
  return data.filter((movie) =>
    (movie.nameRU + movie.nameEN)
      .toLowerCase()
      .includes(keywords.toLowerCase())
  );
}

function toggleMovies(moviesList, isSwitchOn) {
  return !isSwitchOn
    ? moviesList
    : moviesList.filter(
        (movie) => movie.duration < 40
      );
}

function convertMoviesData(moviesList) {
  return moviesList.map((movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: this._baseUrl + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: this._baseUrl + movie.image.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }));
}

function checkMoviesList(list, savedList) {
  const result = list;
  result.forEach((movie, index) => {
    result[index].type = savedList.find(
      (item) => item.movieId === movie.movieId
    )
      ? 'saved'
      : 'save';
  });

  return result;
}

function calculateCardsPerPage() {
  const result = { initial: 0, additional: 0 };

  if (window.innerWidth >= 1280) {
    result.initial = 12;
    result.additional = 3;
  } else if (
    window.innerWidth >= 768 &&
    window.innerWidth < 1280
  ) {
    result.initial = 8;
    result.additional = 2;
  } else {
    result.initial = 5;
    result.additional = 1;
  }

  return result;
}

function calculateCardsPageNumber(
  list,
  cardsPerPage
) {
  return list.length > cardsPerPage.initial
    ? Math.ceil(
        (list.length - cardsPerPage.initial) /
          cardsPerPage.additional +
          1
      )
    : 1;
}

export {
  searchMovies,
  toggleMovies,
  convertMoviesData,
  checkMoviesList,
  calculateCardsPerPage,
  calculateCardsPageNumber,
};
