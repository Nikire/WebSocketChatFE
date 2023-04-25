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

  socket.on('message-fe', (message) => {
    setMessages([...messages, message]);
  });

  return (
    <div className="chatBox-container d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column align-items-start gap-3">
        {messages.reverse().map((message, i) =>
          i === messages.length - 1 ? (
            <div className="d-flex w-100" ref={lastMessageRef} key={i}>
              <Message message={message} />
            </div>
          ) : (
            <React.Fragment key={i}>
              <Message message={message} />
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}
