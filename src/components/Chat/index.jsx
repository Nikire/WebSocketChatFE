import React, { useEffect, useRef, useState } from 'react';
import Message from '@C/Message';
import socket from '@/socket';
import { useSelector } from 'react-redux';

export default function Chat() {
  const user = useSelector(state=>state.user)
  let messages = useSelector((state) => state.messages);
  let loading = useSelector((state) => state.loading);
  let [messagesLocal, setMessagesLocal] = useState([]);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setMessagesLocal(...messagesLocal, messages);
  }, [messages]);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesLocal]);

  socket.on('message-fe', (message) => {
    setMessagesLocal([...messagesLocal, message]);
  });

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="chatBox-container d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column align-items-start gap-3">

      {[...messagesLocal].reverse().map((message, i) =>
          i === messagesLocal.length - 1 ? (
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
