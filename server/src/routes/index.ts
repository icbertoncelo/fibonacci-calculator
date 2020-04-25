import { Router } from 'express';

import { redisClient, redisPublisher } from '../lib/redis';
import { pgClient } from '../lib/pg';

const routes = Router();

routes.get('/', (request, response) => response.json({ ok: true }));

routes.get('/values/all', async (request, response) => {
  const values = await pgClient.query('SELECT * FROM  values');

  return response.json(values.rows);
});

routes.get('/values/current', (request, response) => {
  redisClient.hgetall('values', (error, values) => {
    response.json(values);
  });
});

routes.post('/values', (request, response) => {
  const { index } = request.body;

  if (parseInt(index, 10) > 40) {
    return response.status(422).json({ error: 'Index is too high' });
  }

  redisClient.hset('values', index, 'Nothing yet!');
  redisPublisher.publish('insert', index);
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  return response.json({ working: true });
});

export default routes;
