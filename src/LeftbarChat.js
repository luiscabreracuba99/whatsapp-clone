import { Avatar } from '@material-ui/core';
import React from 'react';
import './LeftbarChat.css';

function LeftbarChat() {
  return (
    <div className='leftbarChat'>
      <Avatar />
      <div className='leftbarChat__info'>
        <h2>Pepitin</h2>
        <p>Hello bro</p>
      </div>
    </div>
  );
}

export default LeftbarChat;
