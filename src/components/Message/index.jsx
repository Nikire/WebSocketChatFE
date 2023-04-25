import React from 'react';
import s from './Message.module.css';

export default function Message({ message: { text, type, username, hour } }) {
  switch (type) {
    case 'status':
      return (
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <span className="fw-bold">{text}</span>
        </div>
      );
    default:
      return (
        <div className="d-flex flex-column gap-2">
          <small className="text-muted fw-light">{`${username} - ${hour}`}</small>
          <div className={s.message}>
            <span className={s.messageContent}>{text}</span>
          </div>
        </div>
      );
  }
}
