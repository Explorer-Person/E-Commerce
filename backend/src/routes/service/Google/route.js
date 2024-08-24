const { fetchCities } = require("@root/src/services");
const { fetchDistricts, fetchNeigborhoods } = require("@root/src/services/Maps/service");
const express = require("express");
const router = express.Router();

router.get("/api/map/cities/:selectedCountry", fetchCities);
router.get("/api/map/districts/:selectedCity", fetchDistricts);
router.get("/api/map/neigborhoods/:selectedDistrict", fetchNeigborhoods);





module.exports = router;