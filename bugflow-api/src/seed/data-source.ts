import 'reflect-metadata';
import path from 'path';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.resolve();

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, 'src/teste/*.ts')],
  migrations: [path.join(__dirname, 'src/migrations/*.ts')],
});
