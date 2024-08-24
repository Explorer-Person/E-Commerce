const { executeQuery } = require("@src/db");
// Create trackingEvents table
async function createTrackingEventsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS trackingEvents (
        id INT AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(255),
        date DATE,
        time TIME,
        location VARCHAR(255),
        orderId INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (orderId) REFERENCES orders(id)
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("TrackingEvents table creation success");
    } catch (err) {
      console.error("Error creating trackingEvents table:", err);
    }
  }

  module.exports = createTrackingEventsTable;
