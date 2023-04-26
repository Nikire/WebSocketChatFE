import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import socket from '../../socket';

/**
 * A component that requires authentication to access its children.
 * If the user is not authenticated or the token is invalid, the component will redirect the user to the login page.
 *
 * @component
 * @param {ReactNode}  "children" - The child elements to render.
 * @param {boolean}  "force" = false - Whether to force the component to redirect the user to the login page even if the user is already authenticated.
 * @returns {ReactNode} - The rendered component.
 **/
const UserRoutes = ({ children, force = false }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const sessionToken = localStorage.getItem('sessionToken');
  const navigate = useNavigate();
  //TODO handle sessionToken
  useEffect(() => {
    if (force) {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }
  }, [isAuthenticated, sessionToken]);

  return <>{children}</>;
};

export default UserRoutes;
