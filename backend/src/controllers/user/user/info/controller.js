const { errorHandler } = require("@root/src/errors");
const { sendResponse } = require("@root/src/middlewares");
const { UserQueries } = require("@root/src/queries");

exports.getUser = (req, res, next) => {
  const users = new UserQueries();
  const userId = req.session.user.id;
  console.log(userId);
  users
    .findUser(userId)
    .then((result) => {
      if (result) {
        console.log(result[0]);
        return res.status(200).json({
          status: 200,
          process: "get",
          userData: {
            username: result[0].username,
            email: result[0].email,
            phone: result[0].phone,
            role: result[0].role,
          },
        });
      }
      return res.status(404).json({
        status: 404,
        process: false,
        userData: null,
      });
    })
    .catch((err) => {
      errorHandler(500, "failed", "Something Went Wrong")(err,req,res,next);
    });
};

exports.editUser = (req, res, next) => {
  const userData = req.body.userData;
  const userId = req.session.user.id;
  const users = new UserQueries();
  users.editUser(userData, userId)
    .then((result) => {
      if (result) {
        console.log(result[0]);
        return res.status(201).json({
          status: 201,
          process: "edit",
          userData: {
            username: result[0].username,
            email: result[0].email,
            phone: result[0].phone,
            role: result[0].role,
          },
        });
      }

      sendResponse(401, "failed", "Incorrect User Info")(err,req,res,next)
    })
    .catch((err) => errorHandler(500, "failed", "Something Went Wrong")(err,req,res,next));
};
