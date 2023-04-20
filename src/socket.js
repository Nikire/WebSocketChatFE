import { io } from 'socket.io-client';
import env from './config.js';

const socket = io(env.origin);

socket.on('connect', () => {
  console.log('Connected:' + socket.id);
});

export default socket;
