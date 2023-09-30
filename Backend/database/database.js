import pg from 'pg'
const client = new pg.Client({
  database: 'UserInfo'
})
 
await client.connect()
 
const result = await client.query('SELECT * FROM person')
console.log(result.rows)
 
await client.end()