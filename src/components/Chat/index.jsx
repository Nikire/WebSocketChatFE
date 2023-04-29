import React, { useEffect, useRef, useState } from 'react';
import Message from '../Message';
import socket from '../../socket';
import { useSelector } from 'react-redux';
import s from '../Message/Message.module.css';
export default function Chat() {
  let [messages, setMessages] = useState([]);
  const user = useSelector(state=>state.user)
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
            <div key={i} className={`d-flex w-100 flex-column ${message.username == user.username ? "align-items-end" : 'align-items-start'}`} ref={lastMessageRef} key={i}>
              <Message message={message} user={user}/>
            </div>
          ) : (
            <div key={i} className={`d-flex w-100 flex-column ${message.username == user.username ? "align-items-end" : 'align-items-start'}`}>
              <Message message={message} user={user}/>
            </div>
          )
        )}
      </div>
    </div>
  );
}
