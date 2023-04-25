import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
} from '../actionTypes';

import { login, register } from '../../services/auth.service';
import { getUserInfo } from '../../services/users.service';
import socket from '../../socket';
// ...

export const loginUser = (username, password, navigate) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const loginResponse = await login(username, password);
    const user = await getUserInfo(loginResponse.accessToken);
    await dispatch(loginSuccess(user));
    navigate('/');
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser =
  (username, password, name, email, navigate) => async (dispatch) => {
    dispatch(registerRequest());
    try {
      const registerResponse = await register(username, password, name, email);
      const user = await getUserInfo(registerResponse.accessToken);
      await dispatch(registerSuccess(user));
      navigate('/');
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => {
  socket.emit('message', `${user.username} has connected`, 'status');

  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => {
  socket.emit('message', `${user.username} has connected`, 'status');

  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
