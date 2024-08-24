const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/TT/api/reverseGeocode/", async (req, res, next) => {
  const coords = req.body.coords;
  await fetch(
    `https://api.tomtom.com/search/2/reverseGeocode/${coords.lat},${coords.lon}.json?key=${process.env.TT_MAPS_API_KEY}&radius=5000`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
