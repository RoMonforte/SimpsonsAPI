const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'RmC',
    password: 'admin123',
    database: 'simpsons_api'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;

