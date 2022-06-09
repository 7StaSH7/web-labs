const dotenv = require("dotenv");
dotenv.config();
const isDev = process.env.NODE_ENV !== "prod";
module.exports = {
  type: "postgres",
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [isDev ? "src/db/entity/**/*.ts" : "dist/db/entity/**/*.js"],
  migrations: [
    isDev ? "src/db/migration/**/*.ts" : "dist/db/migration/**/*.js",
  ],
  cli: {
    migrationsDir: isDev ? "src/db/migration" : "dist/db/migration",
  },
};
