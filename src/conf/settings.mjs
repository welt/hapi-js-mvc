/* eslint-disable no-underscore-dangle */
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const settings = {
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../static/public'),
      },
    },
    debug: {
      log: ['hapi', 'error', 'debug', 'info', 'warning', 'request', 'server', 'timeout', 'internal', 'implementation', 'tail', 'remove', 'last', 'add'],
      request: ['hapi', 'error', 'debug', 'info', 'warning', 'request', 'server', 'timeout', 'internal', 'implementation', 'tail', 'remove', 'last', 'add', 'received', 'handler', 'response'],
    },
  },
  db: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    database: process.env.DATABASE_NAME || 'hapi-mvc',
    user: process.env.DATABASE_USER || 'hapi-mvc',
    password: process.env.DATABASE_PASSWORD || 'hapi-mvc',
    dialect: process.env.DATABASE_DIALECT || 'mysql',
  },
};
export default settings;
