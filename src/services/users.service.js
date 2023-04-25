import axios from 'axios';
const { REACT_APP_ORIGIN } = process.env;

export const getUserInfo = async (accessToken) => {
  const response = await axios.get(`${REACT_APP_ORIGIN}user/`, {
    headers: { Authorization: 'Bearer ' + accessToken },
  });
  return response.data;
};
