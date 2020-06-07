const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordConfirm: {
    type: String,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
