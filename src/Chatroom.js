import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chatroom.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chatroom() {
  return (
    <div className='chatroom'>
      <div className='chatroom__header'>
        <Avatar />
        <div className='chatroom_headerInfo'>
          <h3>Username</h3>
          <p>last seen</p>
        </div>
        <div className='chatroom_headerRight'>
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chatroom__body'>
        <p className='chatroom__message'>
          <span className='chat__name'>Pepe</span>
          The message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Chatroom;
