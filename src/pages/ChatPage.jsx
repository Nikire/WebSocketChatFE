import React from 'react';
import Chat from '@C/Chat';
import ChatInput from '@C/ChatInput';

export default function ChatPage() {
  return (
    <div className="d-flex flex-column chatBox">
      <Chat />
      <div className="d-flex flex-column gap-2 w-100">
        <hr />
        <ChatInput />
      </div>
    </div>
  );
}
