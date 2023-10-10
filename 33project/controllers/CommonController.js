const CommonController = {
  async get_homepage(req, res) {
    // res.locals.data = req.session.username
    console.log("session   : ", req.session.isloggedin);
    res.render("mainpage", { isloggedin: req.session.isloggedin });
  },

  async get_aboutpage(req, res) {
    res.render("aboutpage");
  },

  async get_admin_dashboard(req, res) {
    // console.log(req.session);
    res.render("admindashboard");
  },
};

module.exports = CommonController;
