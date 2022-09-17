const app = require ("./app")
const sequelize = require("./database/database.js")

const port = process.env.PORT || 3001;

sequelize
  .sync({force: false})
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port, () => console.log("Server listening on port", port));
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

//! TESTEO DE CONEXION A DB CON PROMESAS (NO ES OLBIGATORIO)
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

