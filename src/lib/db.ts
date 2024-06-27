import postgres from "postgres";

const sql = postgres(process.env.PG_CONNECTION_STRING!, {
  idle_timeout: 5,
  publications: "insert_orders",
  max: 150,
});

export default sql;
