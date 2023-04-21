import React, { useState } from 'react';
import socket from '../../socket';
export default function ChatInput() {
  const [text, setText] = useState('');
  function changeHandler(e) {
    setText(e.target.value);
  }
  function sendHandler(e) {
    e.preventDefault();
    socket.emit('message', text);
    setText('');
  }
  return (
    <form class="d-flex gap-2">
      <input
        onChange={changeHandler}
        type="text"
        class="form-control shadow-none w-70"
        value={text}
        placeholder="Type your message here..."
        aria-label="Chat message"
        aria-describedby="send-button"
      />
      <div class="input-group-append">
        <button
          onClick={sendHandler}
          class="btn btn-primary btn-circle mr-1"
          type="submit"
          id="send-button"
        >
          <i class="bi bi-send h5 m-0"></i>
        </button>
      </div>
    </form>
  );
}
