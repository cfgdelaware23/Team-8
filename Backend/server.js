const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5432;

app.use(bodyParser.json());

const dbConfig = {
  user: 'petrovikj',
  password: 'dp788',
  host: '127.0.0.1', // or '127.0.0.1'
  port: 5432, // PostgreSQL default port
  database: 'petrovikj',
};

const pool = new Pool(dbConfig);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/submitFormData', async (req, res) => {
  const { FirstName, LastName } = req.body; // Adjust the property names to match your form fields

  try {
    const client = await pool.connect();
    const query = `
      INSERT INTO Person (FirstName, LastName)
      VALUES ($1, $2)
      RETURNING PersonID; // Optionally return the inserted record's ID
    `;
    const values = [FirstName, LastName];
    const result = await client.query(query, values);
    client.release();

    // Optionally send the inserted record's ID in the response
    res.status(200).json({ message: 'Data inserted successfully', insertedId: result.rows[0].PersonID });
  } catch (err) {
    console.error('Error:', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});
