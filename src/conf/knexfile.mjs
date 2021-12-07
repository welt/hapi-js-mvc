/*
* knexfile.mjs
*/

/* eslint-disable import/extensions */
import settings from './settings.mjs';

const dbSettings = settings.db;

const config = {
  client: 'mysql2',
  connection: {
    host: dbSettings.host,
    port: dbSettings.port,
    user: dbSettings.user,
    password: dbSettings.password,
    database: dbSettings.database,
  },
  migrations: {
    directory: './migrations',
    loadExtensions: ['.mjs'],
  },
  seeds: {
    directory: './seeds',
    loadExtensions: ['.mjs'],
  },
};
export default config;
