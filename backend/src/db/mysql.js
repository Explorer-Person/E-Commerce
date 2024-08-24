const mysql = require("mysql2/promise");
require("dotenv").config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function executeQuery(query, parameters) {
    const connection = await pool.getConnection();
    try {
        // Create a connection
      const [rows, fields] = await connection.query(query, parameters);
      return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

module.exports = {executeQuery, pool};
