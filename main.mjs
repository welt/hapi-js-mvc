/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (_request, _h) => 'Hello World!',
  });

  server.route({
    method: ['PUT', 'POST'],
    path: '/',
    handler: (_request, _h) => 'I did something!',
  });

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
