import React from 'react';
import './App.css';
import Leftbar from './Leftbar';
import Chatroom from './Chatroom';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Leftbar />
        <Chatroom />
      </div>
    </div>
  );
}

export default App;
