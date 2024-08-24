const express = require("express");
const app = express();

app.use("*", (req,res,next)=>{
    const isAuth = req.session.isAuth;

    if(isAuth !== true){
        res.status(401).json({
            status: 401,
            process: false,
            message: "User Is Not Authorized."
        });
    }
    next();
})

module.exports = app;