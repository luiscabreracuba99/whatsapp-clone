import React from 'react';
import './Leftbar.css';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LeftbarChat from './LeftbarChat';

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='leftbar__header'>
        <Avatar />
        <div className='leftbar__headerRight'>
          <IconButton>
            <DonutLargeRoundedIcon />
          </IconButton>
          <IconButton>
            <ChatRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className='leftbar__search'>
        <div className='leftbar__searchcontainer'>
          <SearchIcon />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='leftbar__chats'>
        <LeftbarChat />
        <LeftbarChat />
        <LeftbarChat />
      </div>
    </div>
  );
}

export default Leftbar;
