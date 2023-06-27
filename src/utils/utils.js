// function searchMovies(data, params) {
//   return data.filter((movie) =>
//     params.switch
//       ? (movie.nameRU + movie.nameEN)
//           .toLowerCase()
//           .includes(params.search.toLowerCase())
//       : (movie.nameRU + movie.nameEN)
//           .toLowerCase()
//           .includes(
//             params.search.toLowerCase()
//           ) && movie.duration > 40
//   );
// }
function searchMovies(data, keywords) {
  return data.filter((movie) =>
    (movie.nameRU + movie.nameEN)
      .toLowerCase()
      .includes(keywords.toLowerCase())
  );
}

function toggleMovies(moviesList, isSwitchOn) {
  return isSwitchOn
    ? moviesList
    : moviesList.filter(
        (movie) => movie.duration > 40
      );
}

function checkMoviesList(list, savedList) {
  const result = list;
  result.forEach((movie, index) => {
    result[index].isSaved = savedList.find(
      (item) => item.movieId === movie.movieId
    )
      ? true
      : false;
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

export {
  searchMovies,
  toggleMovies,
  checkMoviesList,
  calculateCardsPerPage,
};
