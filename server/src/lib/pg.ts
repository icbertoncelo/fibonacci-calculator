import { Pool } from 'pg';
import databaseConfig from '../config/database';

const pgClient = new Pool(databaseConfig);

export { pgClient };
