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
    },
  } = require("@src/controllers");

router.post("/address/add", postAddress);
router.post("/address/select", selectAddress);
router.get("/address/:addressId", getAddress);
router.get("/address/selectedAddress", getAddress);
router.get("/addresses", getAddresses);
router.delete("/address/delete", deleteAddress);
router.delete("/addresses/delete", deleteAllAddresses);
router.put("/address/change", putAddress);

module.exports = router;