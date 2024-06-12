import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DB_URL!;

const pgClient = postgres(connectionString, { prepare: false });

export const client = drizzle(pgClient);
