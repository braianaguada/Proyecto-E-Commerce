const { Router } = require("express");

const localsRoute = require("./local");

const router = Router();

router.use("/local", localsRoute);

module.exports = router;
