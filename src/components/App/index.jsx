import React from 'react'
import socket from '../../socket.js'

export default function App() {
  function handleButton () {
    socket.emit("test");
  }
  return (
    <div className="w-100 d-flex justify-content-center">
      <button className='btn btn-secondary' onClick={handleButton}>Test button</button>
    </div>
  )
}
