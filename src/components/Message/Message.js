import React from 'react';
import './Message.css';

function Message({ message }) {
  return (
    <p className='message'>{message.text}</p>
  );
}

export default Message;
