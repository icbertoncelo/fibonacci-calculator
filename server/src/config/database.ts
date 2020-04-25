interface Postgres {
  host: string;
  database: string;
  port: number;
  user: string;
  password: string;
}

const databaseConfig: Postgres = {
  host: process.env.POSTGRES_HOST as string,
  database: process.env.POSTGRES_DATABASE as string,
  port: parseInt(process.env.POSTGRES_PORT as string, 10),
  user: process.env.POSTGRES_USERNAME as string,
  password: process.env.POSTGRES_PASSWORD as string,
};

export default databaseConfig;
