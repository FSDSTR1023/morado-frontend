/* eslint-disable no-unused-vars */
import React from 'react';
import { socket } from '../../../../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <div className='flex flex-row gap-5'>
      <button className='bg-green-50' onClick={ connect }>Connect</button>
      <button className='bg-green-50' onClick={ disconnect }>Disconnect</button>
    </div>
  );
}