const express = require("express");
const router = express.Router();

const { AuthController } = require("../controllers");

router.get("/login", AuthController.get_loginPage);
router.post("/login", AuthController.post_loginPage);
router.get("/registration", AuthController.get_registrationPage);
router.post("/registration", AuthController.post_registrationPage);
router.get("/logout", AuthController.logout);
// router.get("/*", AuthController.get_session);

module.exports = router;
