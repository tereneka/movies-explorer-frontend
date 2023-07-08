import React from 'react';
import './SearchForm.css';
import { useForm } from '../../hooks/useForm';

function SearchForm({
  defaultValues,
  onSubmit,
  onToggleSwitch,
  onResetResult,
  isLoad,
}) {
  const {
    values,
    isFocus,
    isValid,
    handleChange,
    handleFocus,
    handleBlur,
    setValues,
  } = useForm({
    keywords: defaultValues.keywords,
    switch: defaultValues.switch,
  });

  return (
    <form
      className='search-form'
      name='search'
      onSubmit={(e) => onSubmit(e, values)}>
      <div
        className={`search-form__search-group ${
          isFocus.keywords
            ? 'search-form__search-group_focused'
            : ''
        }`}>
        <input
          className='search-form__serch-input'
          type='text'
          name='keywords'
          placeholder='Фильм'
          value={values.keywords}
          required
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {values.keywords && (
          <button
            className='search-form__reset-btn'
            onClick={() =>
              onResetResult(setValues)
            }
          />
        )}

        <button
          className='search-form__serch-btn'
          type='submit'
          disabled={!isValid || isLoad}>
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
