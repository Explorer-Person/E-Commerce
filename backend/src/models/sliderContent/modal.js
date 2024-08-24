const { executeQuery } = require("../../db");
// Create sliderContents table
async function createSliderContentsTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS sliderContents (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        image VARCHAR(255),
        content TEXT,
        inHome DOUBLE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
  
    try {
      await executeQuery(createTableQuery);
      console.log("SliderContents table creation success");
    } catch (err) {
      console.error("Error creating sliderContents table:", err);
    }
  }

  module.exports = createSliderContentsTable;
