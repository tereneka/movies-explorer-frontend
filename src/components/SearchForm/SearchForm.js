import React, { useEffect } from 'react';
import './SearchForm.css';
import { useForm } from '../../hooks/useForm';

function SearchForm({ onSubmit, onResetResult }) {
  const {
    values,
    isFocus,
    handleChange,
    handleFocus,
    handleBlur,
  } = useForm([
    { name: 'search', defaultValue: '' },
    { name: 'switch', defaultValue: true },
    ,
  ]);

  useEffect(
    () => onResetResult(values, isFocus),
    [values, isFocus]
  );

  return (
    <form
      className='search-form'
      name='search'
      onSubmit={(e) => onSubmit(e, values)}>
      <div
        className={`search-form__search-group ${
          isFocus.search
            ? 'search-form__search-group_focused'
            : ''
        }`}>
        <input
          className='search-form__serch-input'
          type='text'
          name='search'
          placeholder='Фильм'
          value={values.search}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <button
          className='search-form__serch-btn'
          type='submit'>
          Поиск
        </button>
      </div>

      <label
        className={`search-form__switch-label ${
          values.switch
            ? 'search-form__switch-label_checked'
            : ''
        }`}>
        <input
          className='search-form__switch'
          type='checkbox'
          name='switch'
          onChange={handleChange}
          checked={values.switch}
        />
        Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;
