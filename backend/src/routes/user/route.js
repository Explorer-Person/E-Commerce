
const { authCheck } = require("@root/src/middlewares");
const AddressRoutes = require("./address");
const CartRoutes = require("./cart");
const {
  userController: {
    signup: { postSignup },
    login: { postLogin },
    userInfo: { getUser, editUser },
  },
} = require("@src/controllers");
const express = require("express");
const router = express.Router();

router.post("/signup", postSignup);
router.post("/login", postLogin);

router.get("/user", authCheck, getUser);

router.put("/user/edit", authCheck, editUser);


router.use("/user", authCheck, AddressRoutes);
router.use("/user", authCheck, CartRoutes);

module.exports = router;
