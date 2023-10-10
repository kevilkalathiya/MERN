const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const hbs = require("hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/../views/partials");
app.set("view engine", "hbs");

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

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});

module.exports.app;
