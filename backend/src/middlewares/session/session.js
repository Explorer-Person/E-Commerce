require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { pool } = require("@src/db");

const app = express();

const sessionStore = new MySQLStore ({
    clearExpired: true,
    checkExpirationInterval: 900000, //15 minutes
    expiration: 86400000, // 1 day
}, pool);

app.use(session({
    name: "login",
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        secure: false, 
        maxAge: 1000 * 60 * 60 * 24, // expiration time 1 day.
        httpOnly: true,
    },
}));

module.exports = app;