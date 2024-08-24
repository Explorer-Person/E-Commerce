const { executeQuery } = require("@src/db");
// Create products table
async function createProductsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        image VARCHAR(255),
        price INT,
        detail TEXT,
        quantity DOUBLE,
        rate DOUBLE,
        buyCount INT,
        weight VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        discounted VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Products table creation success");
    } catch (err) {
      console.error("Error creating products table:", err);
    }
  }

  module.exports = createProductsTable;
