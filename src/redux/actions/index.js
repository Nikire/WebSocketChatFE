import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  GET_MESSAGES,
  SET_LOADING,
} from '../actionTypes';

import { login, register } from '../../services/auth.service';
import { getUserInfo } from '../../services/users.service';
import socket from '../../socket';
import { getAllMessages } from '../../services/messages.service';
// ...
export const messagesGet = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const messages = await getAllMessages();
    dispatch(messageSuccess(messages));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
  }
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

export const messageSuccess = (messages) => {
  return {
    type: GET_MESSAGES,
    payload: messages,
  };
};
export const loginUser = (username, password, navigate) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const loginResponse = await login(username, password);
    const user = await getUserInfo(loginResponse.accessToken);
    localStorage.setItem('sessionToken', loginResponse.accessToken);
    await dispatch(messagesGet());
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
      localStorage.setItem('sessionToken', registerResponse.accessToken);
      await dispatch(messagesGet());
      await dispatch(registerSuccess(user));
      navigate('/');
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user, accessToken) => {
  socket.emit('message', {
    text: `${user.username} has connected`,
    type: 'status',
  });
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

export const registerSuccess = (user, accessToken) => {
  socket.emit('message', {
    text: `${user.username} has connected`,
    type: 'status',
  });
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const logout = () => {
  localStorage.clear('sessionToken');
  return {
    type: LOGOUT,
  };
};
