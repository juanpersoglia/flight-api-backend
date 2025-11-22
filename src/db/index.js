import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: "juansa",
  host: "localhost",
  database: "flightsdb",
  password: "secret123",
  port: 5432,
});
