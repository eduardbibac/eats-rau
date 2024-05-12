import postgres from 'postgres';

const sql = postgres(process.env.PG_CONNECTION_STRING!);

export default sql;