import React, { useEffect, useRef, useState } from 'react';
import Message from '../Message';
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
    <div className="chatBox-container d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column align-items-start gap-3">
        {messages.reverse().map((message, i) =>
          i === messages.length - 1 ? (
            <div className="bubble-container" ref={lastMessageRef} key={i}>
              <Message msg={message} />
            </div>
          ) : (
            <div className="bubble-container" key={i}>
              <Message msg={message} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
