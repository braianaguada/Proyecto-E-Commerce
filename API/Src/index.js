const express = require("express");
const bodyParser = require ("body-parser")
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

module.exports = app;