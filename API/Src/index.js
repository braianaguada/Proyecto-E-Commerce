const express = require("express");
const bodyParser = require ("body-parser")
const sequelize = require ("./db")
// const mongoose = require("mongoose");
// const routes = require("./routes/index.js");
// const cors = require("cors")
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", (req, res) => {
    res.send("Hola Mundo")
});



app.listen(port, () => console.log("Server listening on port", port));


    sequelize.authenticate().then (() => {
        console.log('Connection has been established successfully.')
    }).catch (error => {
        console.error('Unable to connect to the database:', error);
    })


module.exports = app;