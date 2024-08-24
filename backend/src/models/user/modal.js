const { executeQuery } = require("@src/db");
// Create users table
async function createUsersTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(255),
        password VARCHAR(255),
        role VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Users table creation success");
    } catch (err) {
      console.error("Error creating users table:", err);
    }
  }

  module.exports = createUsersTable;