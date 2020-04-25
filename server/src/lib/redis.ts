import redis from 'redis';

import redisConfig from '../config/redis';

const redisClient = redis.createClient({
  ...redisConfig,
  retry_strategy: () => 1000,
});

const redisPublisher = redisClient.duplicate();

export { redisClient, redisPublisher };
