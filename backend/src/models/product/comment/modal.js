const { executeQuery } = require("@src/db");
// Create comments table
async function createCommentsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS comments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255),
        image VARCHAR(255),
        title VARCHAR(255),
        content TEXT,
        evaluate DOUBLE,
        like INT,
        date DATE,
        productId INT,
        userId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (productId) REFERENCES products(id),
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Comments table creation success");
    } catch (err) {
      console.error("Error creating comments table:", err);
    }
  }

  module.exports = createCommentsTable;
