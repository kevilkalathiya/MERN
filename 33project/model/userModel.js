const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Mobile: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    // enum: ['Admin', 'User'],
    enum: {
      values: ["Admin", "User"],
      message: "{VALUE} is not supported",
    },
    default: "User",
  },
  token: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  console.log("this.Password", this);
  console.log(this.isModified("Password"));
  if (!this.isModified("Password")) {
    console.log("called inside password is not Modified");
    return next();
  }
  try {
    console.log("called inside try password", this);
    const hashedPassword = bcrypt.hashSync(this.Password, 10);
    this.Password = hashedPassword;
    next();
  } catch (error) {
    console.log("called inside catch password");
    next(error);
  }
});
module.exports = mongoose.model("Users", UserSchema);
