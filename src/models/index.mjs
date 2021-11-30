/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import Sequelize from 'sequelize';
import Note from './note.mjs';
import Settings from '../conf/settings.mjs';

const dbSettings = Settings.db;
const sequelize = new Sequelize(
  dbSettings.database,
  dbSettings.user,
  dbSettings.password,
  dbSettings,
);
const db = {};

const note = Note(sequelize, Sequelize);
db[note.name] = note;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
