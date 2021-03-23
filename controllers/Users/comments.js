const router = require("express").Router();
const User = require("../../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./authLockedRoute");

// GET /posts -- test endpoint
router.get("/", (req, res) => {
  res.json({ msg: "hello from users!" });
});

module.exports = router;
