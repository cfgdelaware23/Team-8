const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5432;

app.use(bodyParser.json());

const dbConfig = {
  user: 'petrovikj',
  password: 'dp788',
  host: '127.0.0.1',
  port: 5432,
  database: 'petrovikj',
};

const pool = new Pool(dbConfig);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/submitFormData', async (req, res) => {
  const { name, number, assistance, housing, insecurity } = req.body;

  try {
    const client = await pool.connect();
    const query = `
      INSERT INTO users (name, number, assistance, housing, insecurity)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [name, number, assistance, housing, insecurity];
    await client.query(query, values);
    client.release();
    res.status(200).json({ message: 'Data inserted successfully.' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
