import axios from 'axios';

const { REACT_APP_ORIGIN } = process.env;

export const login = async (username, password) => {
  const response = await axios.post(`${REACT_APP_ORIGIN}/login`, {
    username,
    password,
  });
  return response.data;
};

export const register = async (username, password) => {
  const response = await axios.post(`${REACT_APP_ORIGIN}/register`, {
    username,
    password,
  });
  return response.data;
};
