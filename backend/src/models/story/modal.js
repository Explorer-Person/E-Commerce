const { executeQuery } = require("../../db");
// Create stories table
async function createStoriesTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS stories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        image VARCHAR(255),
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Stories table creation success");
    } catch (err) {
      console.error("Error creating stories table:", err);
    }
  }
  module.exports = createStoriesTable;
