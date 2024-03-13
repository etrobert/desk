import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error('DATABASE_URL must be set');

const client = postgres(connectionString);
const db = drizzle(client);

await migrate(db, { migrationsFolder: 'drizzle' });

await client.end();
