'server-only';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schemas';

const client = postgres(process.env.POSTGRES_URL as string);

export const db = drizzle(client, { schema, logger: true });
