import 'dotenv/config';

import redis from 'redis';

import redisConfig from './config/redis';

const redisClient = redis.createClient({
  ...redisConfig,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

function fibonacciGenerate(index: number): number {
  if (index < 2) return 1;

  return fibonacciGenerate(index - 1) + fibonacciGenerate(index - 2);
}

redisPublisher.on('message', (channel, message) => {
  redisClient.hset(
    'values',
    message,
    fibonacciGenerate(parseInt(message, 10)).toString(),
  );
});

redisPublisher.subscribe('insert');
