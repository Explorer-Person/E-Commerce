const { executeQuery } = require("@src/db");
// Create payments table
async function createPaymentsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cardNumber INT,
        cardOwner VARCHAR(255),
        cardName VARCHAR(255),
        startDate DATE,
        finishDate DATE,
        securityCode INT,
        userId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Payments table creation success");
    } catch (err) {
      console.error("Error creating payments table:", err);
    }
  }

  module.exports = createPaymentsTable;