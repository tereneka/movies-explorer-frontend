import React from 'react';
import './More.css';

function More({ onClick }) {
  return (
    <div className='more'>
      <button
        className='more__btn'
        onClick={onClick}>
        Ещё
      </button>
    </div>
  );
}

export default More;
