const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares");
const { getUser } = require("../controllers");

router.get("/", auth, async (req, res) => {
  getUser(res, req, req.user._id);
});

module.exports = router;
