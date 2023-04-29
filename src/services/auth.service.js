import axios from 'axios';
const { REACT_APP_ORIGIN } = process.env;

export const login = async (username, password) => {
  const response = await axios.post(`${REACT_APP_ORIGIN}/auth/login`, {
    username,
    password,
  });
  return response.data;
};

export const register = async (username, password, name, email) => {
  const response = await axios.post(`${REACT_APP_ORIGIN}/auth/register`, {
    username,
    password,
    name,
    email,
  });
  return response.data;
};
