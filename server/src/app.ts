import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { pgClient } from './lib/pg';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Configure Postgres databse
pgClient.on('error', () => console.log('Lost database connection'));
pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(error => console.log(error));

export default app;
