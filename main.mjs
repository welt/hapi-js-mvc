/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Model } from 'objection';
import Handlebars from 'handlebars';
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Knex from 'knex';
import Vision from '@hapi/vision';
import Note from './src/models/note.mjs';
import Routes from './src/routes/index.mjs';
import settings from './src/conf/settings.mjs';
import config from './src/conf/knexfile.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const knex = Knex(config);

// Give the knex instance to objection.
Model.knex(knex);

const main = async () => {
  const server = Hapi.server(settings.server);

  await server.register(Vision);
  await server.register(Inert);

  server.route(Routes);

  server.views({
    engines: {
      html: Handlebars,
    },
    relativeTo: `${__dirname}`,
    path: 'src/views',
    layoutPath: 'src/views/layout',
    layout: 'default',
    partialsPath: 'src/views/partials',
    helpersPath: 'src/views/helpers',
  });

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

main()
  .then(() => knex.destroy())
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });
