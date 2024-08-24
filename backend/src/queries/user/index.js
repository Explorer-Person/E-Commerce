// exports.addressQuery = require("./address");
// exports.cartQuery = require("./cart");
// exports.favouriteQuery = require("./favourite");
// exports.orderQuery = require("./order");
// exports.paymentQuery = require("./payment");

const AddressQueries = require("./address");
const UserQueries = require("./query");
const CartQueries = require("./cart");

module.exports = { UserQueries, AddressQueries, CartQueries };


