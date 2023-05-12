import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '@P/Main.jsx';
import ChatPage from '@P/ChatPage.jsx';
import Login from '@P/Login.jsx';
import Register from '@P/Register.jsx';
import ErrorHandler from '@C/ErrorHandler/index.js';
import RedirectToMain from '@P/RedirectToMain.jsx';
import UserRoutes from './UserRoutes.jsx';
import Cookies from 'js-cookie';
import { useDispatch} from 'react-redux';
import { loadUserRequest } from '../../redux/actions/index.js';

export default function AppRouter() {
  // force prop to force user routes (check for the JSDocs on UserRoutes.jsx)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => { 
    const token = Cookies.get('sessionToken');
    if (token) {
      dispatch(loadUserRequest());
      navigate('/');
    }
  }, [dispatch]);
  
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
