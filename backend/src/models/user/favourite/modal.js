const { executeQuery } = require("@src/db");
// Create favs table
async function createFavsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS favs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        productId INT,
        userId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (productId) REFERENCES products(id),
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Favs table creation success");
    } catch (err) {
      console.error("Error creating favs table:", err);
    }
  }

  module.exports = createFavsTable;
