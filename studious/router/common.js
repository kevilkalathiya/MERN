const express = require("express");
const router = express.Router();

const { CommonController } = require("../controllers");

router.get(["/", "/home"], CommonController.get_home_page);
router.get("/about", CommonController.get_about_page);
router.get("/courses", CommonController.get_courses_page);
router.get("/contact", CommonController.get_contact_page);

router.get("/admindashboard", CommonController.get_admin_dashboard);
router.get("/viewallusers", CommonController.get_admin_allusers);
router.delete("/deletedata/:id", CommonController.delete_user_by_id);
router.patch("/updateuser/:id", CommonController.select_update_user_by_id);
router.put("/updateuser/:id", CommonController.store_update_user_by_id);

module.exports = router;
