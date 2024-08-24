const { executeQuery } = require("@src/db");
// Create cart table
async function createCartTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS cart (
        id INT AUTO_INCREMENT PRIMARY KEY,
        productId INT,
        userId INT,
        quantity INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (productId) REFERENCES products(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Cart table creation success");
    } catch (err) {
      console.error("Error creating cart table:", err);
    }
  }

  module.exports = createCartTable;
