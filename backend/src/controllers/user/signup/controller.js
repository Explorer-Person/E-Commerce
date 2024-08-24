const { UserQueries } = require("@root/src/queries");

exports.postSignup = (req, res, next) => {
  const signupData = req.body.signupData;
  const users = new UserQueries();
  users
    .insertUser(signupData)
    .then((result) => {
      if (result) {
        return res.status(201).json({
          status: 201,
          process: "signup",
          message: result,
        });
      }
      return res.status(400).json({
        status: 400,
        process: "fail",
        message: "User Can't Created Succesfully.",
      });
    })
    .catch((err) => {
      throw err;
    });
};
