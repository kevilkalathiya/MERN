const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.rootURL)
    .then(() => {
      console.log("DB ka connection successful");
    })
    .catch((error) => {
      console.log("Issue in DB connection");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
