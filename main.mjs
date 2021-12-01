/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import Handlebars from 'handlebars';
import settings from './src/conf/settings.mjs';
import Routes from './src/routes/index.mjs';
import Models from './src/models/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const init = async () => {
  const server = Hapi.server(settings.server);

  await server.register(Vision);
  await server.register(Inert);

  server.route(Routes);

  await Models.sequelize.sync();

  server.views({
    engines: {
      html: Handlebars,
    },
    relativeTo: `${__dirname}`,
    path: 'src/views',
    layoutPath: 'src/views/layout',
    layout: 'default',
    partialsPath: 'src/views/partials',
    // helpersPath: '/src/views/helpers',
  });

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
