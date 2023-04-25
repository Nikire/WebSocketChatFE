import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_ORIGIN);

export default socket;
