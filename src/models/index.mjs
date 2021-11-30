/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Sequelize from 'sequelize';
import Settings from '../conf/settings.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbSettings = Settings.db;
const sequelize = new Sequelize(
  dbSettings.database,
  dbSettings.user,
  dbSettings.password,
  dbSettings,
);
const db = {};

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.mjs')
  .forEach(async (file) => {
    const model = await import(`${__dirname}/${file}`);
    console.log('model.name ', model.name);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
