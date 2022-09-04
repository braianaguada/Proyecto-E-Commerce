const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes/index.js");
// const cors = require("cors")
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// app.use("/", routes);

//mongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening on port", port));

module.exports = app;