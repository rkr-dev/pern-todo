import pg from 'pg'
const Pool = pg.Pool

export const pool = new Pool({
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  host: 'localhost',
  port: '5432',
  database: 'perntodo',
})
