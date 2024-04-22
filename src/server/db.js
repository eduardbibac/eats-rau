// db.js
import postgres from 'postgres'
import { env } from "@/env";

const sql = postgres('postgres://username:password@host:port/database', {
  host                 : env.PG_HOST,          // Postgres ip address[s] or domain name[s]
  port                 : env.PG_PORT,          // Postgres server port[s]
  database             : env.PG_DATABASE,      // Name of database to connect to
  username             : env.PG_USERNAME,      // Username of database user
  password             : env.PG_PASSWORD,      // Password of database user
})

export default sql