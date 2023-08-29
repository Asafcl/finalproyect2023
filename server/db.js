const { Pool } = require("pg");

const pool = new Pool({
  user: "khmivevx", // Your ElephantSQL database user
  password: "pZOLCzCar7NJGuiLkmUk6hRCTDcAf87q", // Your ElephantSQL database password
  host: "mahmud.db.elephantsql.com", // Your ElephantSQL database host
  port: 5432, // The default port for PostgreSQL is 5432
  database: "khmivevx" // Your ElephantSQL database name (same as user)
});

module.exports = pool;