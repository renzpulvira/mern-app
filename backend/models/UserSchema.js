const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  user_email: {
    type: String,
    required: true,
  },
  user_username: {
    type: String,
  },
  user_password: {
    type: String,
  },
  user_type: {
    type: String,
  },
  user_isLoggedIn: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", User);
