const express = require("express");
const router = express.Router();
const {
    userController: {
      userAddress: {
        postAddress,
        putAddress,
        getAddresses,
        getAddress,
        deleteAddress,
        deleteAllAddresses,
        selectAddress,
      },
      userCart: {
        addToCart
      }
    },
  } = require("@src/controllers");

  router.post("/cart/add", addToCart);

module.exports = router;