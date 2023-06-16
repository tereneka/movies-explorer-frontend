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

export { checkMoviesList };
