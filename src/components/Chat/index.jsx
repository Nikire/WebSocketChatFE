import React, { useEffect, useRef, useState } from 'react';
import Message from '../Message';
import socket from '../../socket';
import { useSelector } from 'react-redux';
export default function Chat() {
  let messages = useSelector((state) => state.messages);
  let loading = useSelector((state) => state.loading);
  let [messagesLocal, setMessagesLocal] = useState([]);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    console.log('LOCO!', messages, messagesLocal);
    setMessagesLocal(...messagesLocal, messages);
  }, [messages]);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesLocal]);

  socket.on('message-fe', (message) => {
    console.log('LOCO! LOCAL', messagesLocal);
    setMessagesLocal([...messagesLocal, message]);
  });

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="chatBox-container d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column align-items-start gap-3">
        {messagesLocal?.reverse().map((message, i) =>
          i === messagesLocal.length - 1 ? (
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
