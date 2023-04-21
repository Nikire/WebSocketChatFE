import React, { useEffect, useRef, useState } from 'react';
import Message from '../Message';
import ChatInput from '../ChatInput';
import socket from '../../socket';
export default function Chat() {
  let [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  socket.on('message-fe', (newMessage) => {
    setMessages([...messages, newMessage]);
  });

  return (
    <div class="chatBox d-flex flex-column justify-content-between gap-3 ">
      <div
        className="d-flex flex-column align-items-start gap-3 overflow-auto"
        style={{ wordWrap: 'break-word' }}
      >
        {messages
          .reverse()
          .map((message, i) =>
            i === messages.length - 1 ? (
              <Message msg={message} ref={lastMessageRef} key={i} />
            ) : (
              <Message msg={message} key={i} />
            )
          )}
      </div>
      <div className="d-flex flex-column gap-2">
        <hr />
        <ChatInput />
      </div>
    </div>
  );
}
