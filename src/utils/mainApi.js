class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(endpoint, method, body) {
    return fetch(`${this._baseUrl}/${endpoint}`, {
      method,
      credentials: 'include',
      withCredentials: true,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(res.status)
    );
  }

  register(user) {
    return this._request('signup', 'POST', user);
  }

  login(user) {
    return this._request('signin', 'POST', user);
  }

  logout() {
    return this._request('signout', 'POST');
  }

  getUser() {
    return this._request('users/me', 'GET');
  }

  editProfile(profileInfo) {
    return this._request(
      'users/me',
      'PATCH',
      profileInfo
    );
  }

  getMovies() {
    return this._request('movies', 'GET');
  }

  saveMovie(movie) {
    return this._request('movies', 'POST', movie);
  }

  deleteMovie(movieId) {
    return this._request(
      `movies/${movieId}`,
      'DELETE'
    );
  }
}

export const mainApi = new MoviesApi({
  baseUrl:
    'https://api.movies.tereneka.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
  },
});
