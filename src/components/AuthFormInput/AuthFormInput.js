import React from 'react';
import './AuthFormInput.css';

function AuthFormInput({
  name,
  label,
  type,
  value,
  minLength,
  onChange,
  errMessage,
}) {
  return (
    <label className='auth-form-input'>
      {label}
      <input
        className={`auth-form-input__input ${
          errMessage
            ? 'auth-form-input__input_type_err'
            : ''
        }`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        minLength={minLength}
      />
      <span className='auth-form-input__err'>
        {errMessage}
      </span>
    </label>
  );
}

export default AuthFormInput;
