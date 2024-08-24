const { errorHandler } = require("@root/src/errors");
const { sendResponse } = require("@root/src/middlewares");
const { CartQueries } = require("@root/src/queries/user");

exports.addToCart = (req, res, next) => {
  const productId = req.body.productId;
  const userId = req.session.user.id;

  const cart = new CartQueries();
  cart
    .addProductToCart(productId, userId)
    .then((result) => {
      if (!result) {
        sendResponse(500, "Insert", "Product Cannot Added To Cart...")(
          req,
          res,
          next
        );
      }
      sendResponse(201, "Insert", "Added Successfully...")(req, res, next);
    })
    .catch((err) =>
      errorHandler(500, "failed", "Something Went Wrong...")(
        err,
        req,
        res,
        next
      )
    );
};
