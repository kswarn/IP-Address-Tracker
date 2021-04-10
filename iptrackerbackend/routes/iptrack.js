const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const cors = require("cors");

router.post("/", async (req, res) => {
  const newUser = new User({
    userid: req.body.userid,
    ipAddress: req.body.ipAddress,
    location: req.body.location,
    timezone: req.body.timezone,
    isp: req.body.isp,
  });

  await newUser.save();
  res.status(201).send(newUser);
});

module.exports = router;
