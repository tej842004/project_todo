const requireAuth = require("../middleware/requireAuth");
const controllers = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

router.use(requireAuth);
router.get("/", controllers.todo_get);
router.get("/:id", controllers.todo_get_id);
router.post("/", controllers.todo_post);
router.delete("/:id", controllers.todo_delete);
router.patch("/:id", controllers.todo_update);

module.exports = router;
