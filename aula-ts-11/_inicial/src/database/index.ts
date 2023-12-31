import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

const db = new Pool({
  connectionString: connectionString,
});

export default db;
