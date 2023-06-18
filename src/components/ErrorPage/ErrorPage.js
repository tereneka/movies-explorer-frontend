import React from 'react';
import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className='error-page'>
      <div>
        <p className='error-page__code'>404</p>
        <p className='error-page__message'>
          Страница не найдена
        </p>
      </div>
      <button
        className='error-page__btn'
        onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ErrorPage;
