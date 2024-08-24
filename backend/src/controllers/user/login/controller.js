const { UserQueries } = require("@root/src/queries");
const bcrypt = require("bcryptjs");
const {errorHandler} = require("@src/errors")
const {sendResponse} = require("@src/middlewares")

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body.loginData;
  const users = new UserQueries();
  if (!username) {
    sendResponse(404, "failed", "User Not Found")(req, res, next);
  }
  users
    .findUser(username)
    .then((result) => {
      if (!result) {
        sendResponse(404, "failed", "User Not Found")(req, res, next);
      }
      const analysis = result.find((user) => {
        const compare = bcrypt.compareSync(password, user.password);
        return compare === true;
      });
      return analysis;
    })
    .then((analysis) => {
      if (!analysis) {
        sendResponse(404, "failed", "Incorrect Infos")(req, res, next);
      } else {
        req.session.user = {
          id: analysis.id,
          username: analysis.username,
        };
        req.session.isAuth = true;
       
        return req.session.save(async(result)=>{
            try{
                res.status(200).json({
                    status: 200,
                    process: "login",
                    message: "User Authorized Successfully.",
                });
            }catch(err){
              errorHandler(500, "failed", "Something went wrong...")(err, req, res, next);
            }
        })
      }
    })
    .catch((err) => {
      errorHandler(500, "failed", "Something went wrong...")(err, req, res, next);
    });
};
