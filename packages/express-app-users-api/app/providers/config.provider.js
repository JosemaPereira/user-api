import 'dotenv/config';

export const defaultConfig = {
  port: process.env.PORT,
  mongo: {
    database: process.env.MONGO_DB_NAME,
    userName: process.env.MONGO_DB_USERNAME,
    pass: process.env.MONGO_DB_PASS,
    server: process.env.MONGO_DB_SERVER
  },
  users: {
    api: process.env.EXTERNAL_USER_API
  }
};
