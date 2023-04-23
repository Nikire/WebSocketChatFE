import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main.jsx';
import ChatPage from '../../pages/ChatPage.jsx';
import Login from '../../pages/Login.jsx';
import Register from '../../pages/Register.jsx';
import ErrorHandler from '../../ErrorHandler/index.js';

export default function AppRouter() {
  return (
    <Main>
      <ErrorHandler />
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Main>
  );
}
