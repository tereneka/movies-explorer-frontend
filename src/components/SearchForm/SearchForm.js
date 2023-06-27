import React, {
  useEffect,
  useState,
} from 'react';
import './SearchForm.css';
import { useForm } from '../../hooks/useForm';

function SearchForm({
  defaultValues,
  onSubmit,
  onToggleSwitch,
  onResetResult,
}) {
  const {
    values,
    isFocus,
    handleChange,
    handleFocus,
    handleBlur,
  } = useForm([
    {
      name: 'keywords',
      defaultValue: defaultValues.keywords,
    },
    {
      name: 'switch',
      defaultValue: defaultValues.switch,
    },
  ]);
  // console.log(values);
  // useEffect(
  //   () => onResetResult(values, isFocus),
  //   [values, isFocus]
  // );

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
          name='keywords'
          placeholder='Фильм'
          value={values.keywords}
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
          onChange={(e) => {
            handleChange(e);
            onToggleSwitch(e.target.checked);
          }}
          checked={values.switch}
        />
        Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;
