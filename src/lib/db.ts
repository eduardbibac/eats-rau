import postgres from "postgres";

const sql = postgres(process.env.PG_CONNECTION_STRING!, {
  publications: "insert_orders",
});

export default sql;
