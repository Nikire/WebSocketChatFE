import axios from 'axios';
import Cookies from 'js-cookie';
const { REACT_APP_ORIGIN } = process.env;

export const getAllMessages = async () => {
  const accessToken = Cookies.get('sessionToken');
  const response = await axios.get(`${REACT_APP_ORIGIN}/messages/`, {
    headers: { Authorization: 'Bearer ' + accessToken },
  });
  return response.data;
};

export const sendMessage = async (text) => {
  const accessToken = Cookies.get('sessionToken');
  const response = await axios.post(
    `${REACT_APP_ORIGIN}/messages/`,
    { text },
    {
      headers: { Authorization: 'Bearer ' + accessToken },
    }
  );
  return response.data;
};
