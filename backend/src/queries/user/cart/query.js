const { cartM } = require("@src/models");
const { executeQuery } = require("@src/db");
const ProductQueries = require("@src/queries/product");
const { cartModal, CartModel } = require("@root/src/models/user");

class CartQueries {
  async getCartProduct(productId) {
    const query = `SELECT * FROM cart WHERE productId = ?`;
    const execute = await executeQuery(query, productId);
    return execute;
  }
  async addProductToCart(productId, userId) {
    let query;
    let params;

    await CartModel();
    const isExist = await this.getCartProduct(productId);
    console.log(isExist[1]);
    if (isExist.length < 1) {
      query = `INSERT INTO cart (productId, userId, quantity) VALUES (?, ?, ?)`;
      params = [productId, userId, 1];
    } else {
      const quantity = isExist[0].quantity + 1;
      query = `UPDATE cart SET quantity = ? WHERE productId = ? AND userId = ?`;
      params = [quantity, productId, userId];
    }

    const execute = executeQuery(query, params);
    return execute;
  }
}

module.exports = CartQueries;
