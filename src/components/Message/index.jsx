import React from 'react';
import s from './Message.module.css';

export default function Message(props) {
  return (
    <div className={s.message}>
      <p className={s.messageContent}>{props.msg}</p>
    </div>
  );
}
