const CommonController = {
  async get_home_page(req, res) {
    res.render("home");

    // console.log("session  :  ", req.session);
    // res.render("home", { isloggedin: req.session.isloggedin });
  },

  async get_about_page(req, res) {
    res.render("about");
  },

  async get_courses_page(req, res) {
    res.render("courses");
  },

  async get_contact_page(req, res) {
    res.render("contact");
  },

  async get_admin_dashboard(req, res) {
    res.render("admindashboard");
  },

  async get_session(req, res) {
    console.log("get_session : ", req.session);
  },
};

module.exports = CommonController;
