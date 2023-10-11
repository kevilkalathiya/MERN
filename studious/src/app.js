const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/../views/partials");
app.set("view engine", "hbs");
app.use(express.static(path.join("public", "assets")));

const session = require("express-session");
app.use(
  session({
    secret: "testing",
    data: null,
    saveUninitialized: true,
    resave: false,
  })
);

const { common_route, auth_route } = require("../router");

app.use("/", common_route);
app.use("/auth", auth_route);

const dbConnect = require("../config/database");
dbConnect();

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} `);
});

module.exports.app;
