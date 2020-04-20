const router = require("express").Router();
const Users = require("../models/UserSchema");
const bcrypt = require("bcrypt");

router.post("/add", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.user_password, 10);
    const user = new Users({
      user_email: req.body.user_email,
      user_username: req.body.user_username,
      user_password: hashedPass,
      user_type: req.body.user_type,
      user_isLoggedIn: req.body.user_isLoggedIn,
    });
    user
      .save()
      .then((data) => {
        res.json(data);
      })
      .then((err) => {
        res.json({ message: err });
      });
  } catch {
    console.log({ message: "Error" });
  }
});

module.exports = router;
