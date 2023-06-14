import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';

function Movies({
  onSearchFormSubmit,
  onResetSearchResult,
}) {
  return (
    <main>
      <SearchForm
        onSubmit={onSearchFormSubmit}
        onResetResult={onResetSearchResult}
      />
    </main>
  );
}

export default Movies;
