const { executeQuery } = require("@src/db");
// Create trackings table
async function createTrackingsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS trackings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(255),
        orderId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (orderId) REFERENCES orders(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("Trackings table creation success");
    } catch (err) {
      console.error("Error creating trackings table:", err);
    }
  }

  module.exports = createTrackingsTable;