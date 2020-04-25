interface Redis {
  host: string;
  port: number;
}

const redisConfig: Redis = {
  host: process.env.REDIS_HOST as string,
  port: parseInt(process.env.REDIS_PORT as string, 10),
};

export default redisConfig;
