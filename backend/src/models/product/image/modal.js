const { executeQuery } = require("@src/db");
// Create images table
async function createImagesTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        subImage VARCHAR(255),
        productId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (productId) REFERENCES products(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Images table creation success");
    } catch (err) {
      console.error("Error creating images table:", err);
    }
  }

  module.exports = createImagesTable;
