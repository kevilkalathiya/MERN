const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let isLogin = false;

const AuthController = {
  async get_loginPage(req, res) {
    res.render("loginpage");
  },

  async get_registrationPage(req, res) {
    res.render("registrationpage");
  },

  async post_registrationPage(req, res) {
    const { username, email, mobile, password } = req.body;
    const newUser = new User({
      Username: username,
      Email: email,
      Mobile: mobile,
      Password: password,
      Role: "User",
    });
    try {
      const user = await newUser.save();
      console.log("user :", user);
    } catch (err) {
      console.error(err);
      res.send(err);
    }
    // res.send("registration successfully");
    res.render("registrationpage");
  },

  async post_loginPage(req, res) {
    console.log("Called body :", req.body);
    const user = await User.findOne({ Email: req.body.email });
    console.log("Post Login Called :", user);
    if (!user) {
      console.log("inside user not found");
      res.status(500).json({
        type: "failed",
        code: 0,
        message: "User is not found",
      });
      return;
    } else {
      console.log("inside user found");
      // res.cookie("email", user.Email);
      // res.cookie("isloggedin", "true");
      req.session.email = user.Email;
      req.session.isloggedin = true;
      isLogin = true;
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET_KEY
      );
      user.token = token;
      await user.save();
      // res.cookie("token", token);
      req.session.token = token;
    }

    const passwordMatch = bcrypt.compareSync(req.body.password, user.Password);
    console.log("passwordMatch", passwordMatch);

    if (passwordMatch) {
      res.status(200).json({
        type: "success",
        code: 1,
        message: "Login successful",
        data: user,
        isLogin,
      });
    } else {
      res.status(401).json({
        type: "failed",
        code: 0,
        message: "Email or password is invalid",
      });
    }
  },

  async logout(req, res) {
    console.log("called inside logout");
    res.cookie("token", "");
    res.cookie("isloggedin", "");
    res.cookie("email", "");
    res.redirect("login");
    // res.render('loginpage')
  },

  async get_session(req, res) {
    console.log("session K : ", req.session);
  },
};

module.exports = AuthController;
