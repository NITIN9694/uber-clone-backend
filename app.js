const dotenv = require("dotenv");
dotenv.config();
const cores = require('cors');
const express = require('express');
const app = express();


app.use(cores())


app.get("/", (req, res) => {
    res.send("hey. you are doing good");

})


module.exports = app;
