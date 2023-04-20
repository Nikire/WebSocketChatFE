import React from 'react';
import Message from '../Message';
import ChatInput from '../ChatInput';

export default function Chat() {
  const Messages = [
    <Message msg="HOLA1" />,
    <Message msg="HOLA2" />,
    <Message msg="HOLA3" />,
    <Message msg="HOLA4" />,
    <Message msg="HOLA1" />,
    <Message msg="HOLA2" />,
    <Message msg="HOLA3" />,
    <Message msg="HOLA4" />,
    <Message msg="HOLA1" />,
    <Message msg="HOLA2" />,
    <Message msg="HOLA3" />,
    <Message msg="HOLA4" />,
    <Message msg="HOLA1" />,
    <Message msg="HOLA2" />,
    <Message msg="HOLA3" />,
    <Message msg="HOLA4" />,
  ];

  return (
    <div class="chatBox d-flex flex-column justify-content-between gap-3 ">
      <div className="d-flex flex-column-reverse gap-3 overflow-auto">
        {Messages.reverse().map((message) => message)}
      </div>

      <ChatInput />
    </div>
  );
}
