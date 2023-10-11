const express = require("express");
const router = express.Router();

const { CommonController } = require("../controllers");

router.get(["/", "/home"], CommonController.get_home_page);
router.get("/about", CommonController.get_about_page);
router.get("/courses", CommonController.get_courses_page);
router.get("/contact", CommonController.get_contact_page);
router.get("/admindashboard", CommonController.get_admin_dashboard);
router.get("/", CommonController.get_session);

module.exports = router;
