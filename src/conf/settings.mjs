import dotenv from 'dotenv';

dotenv.config();

const settings = {
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
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
