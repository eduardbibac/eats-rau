import postgres from 'postgres';

const sql = postgres('postgres://postgres:admin@localhost:5432/eats-rau');

export default sql;