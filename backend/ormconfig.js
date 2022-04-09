const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ['entity/**/*.ts'],
  migrations: ['migration/**/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
};
