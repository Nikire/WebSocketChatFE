import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main.jsx';
import ChatPage from '../../pages/ChatPage.jsx';
import Login from '../../pages/Login.jsx';
import Register from '../../pages/Register.jsx';
import ErrorHandler from '../ErrorHandler/index.js';
import RedirectToMain from '../../pages/RedirectToMain.jsx';
import UserRoutes from './UserRoutes.jsx';

export default function AppRouter() {
  // force prop to force user routes (check for the JSDocs on UserRoutes.jsx)
  return (
    <Main>
      <ErrorHandler />
      <Routes>
        <Route
          path="/"
          element={
            <UserRoutes force>
              <ChatPage />
            </UserRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<RedirectToMain />} />
      </Routes>
    </Main>
  );
}
