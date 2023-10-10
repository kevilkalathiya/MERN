const express = require("express");
const router = express.Router();

const { CommonController } = require("../controllers");

router.get(["/", "/mainpage"], CommonController.get_homepage);
router.get("/aboutpage", CommonController.get_aboutpage);
router.get("/admindashboard", CommonController.get_admin_dashboard);

module.exports = router;
