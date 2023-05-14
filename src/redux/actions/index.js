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
import Cookies from 'js-cookie';
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
    Cookies.set('sessionToken', loginResponse.accessToken, { expires: 7 });
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
      Cookies.set('sessionToken', registerResponse.accessToken, { expires: 7 });
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

export const loginSuccess = (user) => {
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

export const registerSuccess = (user) => {
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
  Cookies.remove('sessionToken');
  return {
    type: LOGOUT,
  };
};

export const loadUserRequest = () => async (dispatch) => {
  let token = Cookies.get('sessionToken');
  const user = await getUserInfo(token);
  await dispatch(messagesGet());  
  dispatch(loginSuccess(user));
};
