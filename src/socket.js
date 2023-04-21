import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_ORIGIN);

socket.on('connect', () => {
  console.log('Connected:' + socket.id);
});

export default socket;
