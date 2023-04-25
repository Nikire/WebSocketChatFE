import React from 'react';
import s from './Message.module.css';

export default function Message({ text, type }) {
  switch (type) {
    case 'status':
      return (
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <span className="fw-bold">{text}</span>
        </div>
      );
    default:
      return (
        <div className={s.message}>
          <span className={s.messageContent}>{text}</span>
        </div>
      );
  }
}
