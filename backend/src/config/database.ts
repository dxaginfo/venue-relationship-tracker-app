import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST || 'localhost',
  database: DB_NAME || 'venue_tracker',
  username: DB_USER || 'postgres',
  password: DB_PASSWORD || 'postgres',
  logging: false,
});
