import { io } from 'socket.io-client';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://laugh-log.store/'
    : 'http://localhost:8080';

export const socket = io(URL);
