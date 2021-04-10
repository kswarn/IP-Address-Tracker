const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
  },
  location: {
    type: String,
  },
  timezone: {
    type: String,
  },
  isp: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports.User = User;
