const { filterProducts } = require("@root/src/controllers/product/controller");
const {getProducts} = require("@src/controllers");

const express = require("express");
const router = express.Router();

router.get("/products", getProducts);
router.post("/products/filter", filterProducts);






module.exports = router;