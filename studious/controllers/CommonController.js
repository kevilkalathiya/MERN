const User = require("../model/userModel");

const CommonController = {
  async get_home_page(req, res) {
    // console.log("session  :  ", req.session);
    // res.render("home");
    res.render("home", { data: { isloggedin: req.session.isloggedin } });
  },

  async get_about_page(req, res) {
    // res.render("about");
    res.render("about", { data: { isloggedin: req.session.isloggedin } });
  },

  async get_courses_page(req, res) {
    // res.render("courses");
    res.render("courses", { data: { isloggedin: req.session.isloggedin } });
  },

  async get_contact_page(req, res) {
    // res.render("contact");
    res.render("contact", { data: { isloggedin: req.session.isloggedin } });
  },

  async get_admin_dashboard(req, res) {
    res.render("admindashboard");
  },

  async get_admin_allusers(req, res) {
    const user = await User.find();
    res.render("viewallusers", { data: user });
  },

  async delete_user_by_id(req, res) {
    var id = req.params.id;
    const user = await User.findOneAndRemove({ _id: id });
    res.status(200).json({
      type: "success",
      code: 1,
      message: "Data Deleted",
      data: user,
    });
    return;
  },

  async update_user_by_id(req, res) {
    const { username, email, mobile, password } = req.body;
    const updated_user = await User.findOne(
      { Email: email },
      {
        Username: username,
        Email: email,
        Mobile: mobile,
        Password: password,
      }
    );

    const newuser = await updated_user.save();

    console.log(updated_user);

    res.status(200).json({
      type: "success",
      code: 1,
      message: "Data updated",
      data: "user",
    });
  },
};

module.exports = CommonController;
