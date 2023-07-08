class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _convertData(moviesList) {
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

  getMovies() {
    return fetch(
      this._baseUrl + '/beatfilm-movies'
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(res.status)
      )
      .then((data) => this._convertData(data));
  }
}

export const moviesApi = new MoviesApi(
  'https://api.nomoreparties.co'
);
