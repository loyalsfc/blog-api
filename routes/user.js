const express = require("express");
const { register_user, login_user } = require("../controller/userController");

const router = express.Router();

router.post("/register", register_user)

router.post("/login", login_user)

module.exports = router;