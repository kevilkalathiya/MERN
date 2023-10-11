const express = require("express");
const router = express.Router();

const { AuthController } = require("../controllers");

router.get("/login", AuthController.get_login_page);
router.post("/login", AuthController.post_login_page);
router.get("/registration", AuthController.get_registration_page);
router.post("/registration", AuthController.post_registration_page);
router.get("/logout", AuthController.logout);

module.exports = router;
