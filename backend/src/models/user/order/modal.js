const { executeQuery } = require("@src/db");
// Create orders table
async function createOrdersTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        date VARCHAR(255),
        status INT,
        userId INT,
        productId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (productId) REFERENCES products(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Orders table creation success");
    } catch (err) {
      console.error("Error creating orders table:", err);
    }
  }

  module.exports = createOrdersTable;