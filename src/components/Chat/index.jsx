import React, { useState } from 'react';
import Message from '../Message';
import ChatInput from '../ChatInput';
import socket from '../../socket';
export default function Chat() {
  let [messages, setMessages] = useState([]);

  socket.on('message-fe', (newMessage) => {
    console.log('que mierda pasa aca');
    setMessages([...messages, <Message msg={newMessage} />]);
  });

  return (
    <div class="chatBox d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column gap-3 overflow-auto">
        {messages.reverse().map((message) => message)}
      </div>

      <ChatInput />
    </div>
  );
}
