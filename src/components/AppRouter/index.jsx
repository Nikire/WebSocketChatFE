import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main.jsx';
import ChatPage from '../../pages/ChatPage.jsx';
export default function AppRouter() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </Main>
  );
}
