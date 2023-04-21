import React, { useEffect, useRef, useState } from 'react';
import Message from '../Message';
import ChatInput from '../ChatInput';
import socket from '../../socket';
export default function Chat() {
  let [messages, setMessages] = useState([]);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  socket.on('message-fe', (newMessage) => {
    setMessages([...messages, newMessage]);
  });

  return (
    <div
      ref={containerRef}
      class="chatBox d-flex flex-column justify-content-between gap-3 "
    >
      <div
        className="d-flex flex-column align-items-start gap-3 overflow-auto"
        style={{ wordWrap: 'break-word' }}
      >
        {messages.reverse().map((message, i) => (
          <Message msg={message} key={i} />
        ))}
      </div>
      <div className="d-flex flex-column gap-2">
        <hr />
        <ChatInput />
      </div>
    </div>
  );
}
