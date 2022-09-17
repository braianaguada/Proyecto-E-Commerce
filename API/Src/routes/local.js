const { Router } = require("express");
const router = Router();
const local_controller = require("./controllers/local_controller");

router.post("/", local_controller.postLocal);
router.get("/", local_controller.getLocal)
router.get("/search", local_controller.searchLocal)
router.get("/all", local_controller.fetchLocal);
router.get("/all/:id", local_controller.fetchOnlyLocal);

module.exports = router;
