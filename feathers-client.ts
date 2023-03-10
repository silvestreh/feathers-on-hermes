import io from 'socket.io-client';
import feathers, { socketio } from '@feathersjs/client';

export default function createClient (url: string) {
  const options = { transports: ['websocket'], timeout: 20000 };
  const socket = io(url, options);
  const app = feathers()
    .configure(socketio(socket, { timeout: 20000 }));

  app.socket = socket;

  return app;
}
