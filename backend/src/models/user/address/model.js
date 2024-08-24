const { executeQuery } = require("@src/db");
// Create address table
async function createAddressTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS addresses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        country VARCHAR(255),
        city VARCHAR(255),
        district VARCHAR(255),
        street VARCHAR(255),
        neighborhood VARCHAR(255),
        buildingNumber VARCHAR(255),
        postalCode VARCHAR(255),
        addressType VARCHAR(255),
        openAddress TEXT,
        isSelected BOOLEAN,
        userId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Address table creation success");
    } catch (err) {
      console.error("Error creating address table:", err);
    }
  }

  module.exports = createAddressTable;
