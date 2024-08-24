const { executeQuery } = require("../../db");
// Create blogs table
async function createBlogsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        image VARCHAR(255),
        content TEXT,
        like INT,
        date DATE,
        inHome DOUBLE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Blogs table creation success");
    } catch (err) {
      console.error("Error creating blogs table:", err);
    }
  }

  module.exports = createBlogsTable;