const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

router.post("/login", userControllers.login_post);
router.post("/signup", userControllers.signup_post);

module.exports = router;
