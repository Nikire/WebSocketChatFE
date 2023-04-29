import React from 'react';
import s from './Message.module.css';

export default function Message({ message: { text, type, username, hour },user }) {
  switch (type) {
    case 'status':
      return (
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <span className="fw-bold">{text}</span>
        </div>
      );
    default:
      return (
        <>
          <small className={`text-muted fw-light ${username == user.username ? 'text-end' : ''}`}>{`${username} - ${hour}`}</small>
          <div className={`${s.message} ${username == user.username ? s.yourMessage : ''}`}>
            <span className={`${s.messageContent} break-word`}>{text}</span>
          </div>
        </>
      );
  }
}
