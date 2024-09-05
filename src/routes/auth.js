const express = require("express");
const controller = require("../controllers/auth");
const validate = require("../middlewares/validate");
const { authBodyValidator } = require("../validators/auth");

const router = express.Router();

router.post("/register", validate(authBodyValidator), controller.register);
router.post("/login", validate(authBodyValidator), controller.login);

module.exports = router;
