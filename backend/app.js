require('module-alias/register');    
require('dotenv').config(); // Load environment variables from .env file

const {productRouter, userRouter, serviceRouter} = require("@src/routes");
const {sessionConnection, authCheck} = require("@src/middlewares");
const {errorHandler} = require("@src/errors");

const bodyParser = require('body-parser');
const cors = require("cors");
const express = require("express");
const app = express();

// app.set('trust proxy', 1); // Trust first proxy

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
    origin: process.env.CLIENT,
    allowedHeaders: ["Content-Type"],
    credentials: true,
}));
app.use(sessionConnection);

app.use(userRouter);
app.use("/services",serviceRouter); // temporary testing 
app.use(authCheck, productRouter); // temporary testing 

// app.use("*", ()=>{
//     errorHandler(404, "failed", "404 Not Found")(null, req, res, next);
// });




app.listen(process.env.PORT, ()=>{
    console.log("Hİ WEB!!!");
});



