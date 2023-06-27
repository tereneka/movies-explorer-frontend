class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  getMovies() {
    return fetch(this._url).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(res.status)
    );
  }
}

export const moviesApi = new MoviesApi(
  'https://api.nomoreparties.co/beatfilm-movies'
);
