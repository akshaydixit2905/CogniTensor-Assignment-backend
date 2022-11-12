const { Router } = require("express");
const controller = require('./controller');
const router = Router();

router.get("/", controller.getTasks);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);

module.exports = router;