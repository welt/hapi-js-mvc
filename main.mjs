/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Hapi from '@hapi/hapi';
import settings from './src/conf/settings.mjs';
import Routes from './src/lib/routes.mjs';
import Models from './src/models/index.mjs';

const init = async () => {
  const server = Hapi.server(settings.server);

  server.route(Routes);

  await Models.sequelize.sync();

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
