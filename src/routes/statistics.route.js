const express = require("express");
const router = express.Router();
const { auth, isStudent } = require("../middlewares");

const { statisticscontroller } = require("../controllers");

router.get("/", auth, isStudent, async (req, res) => {
  statisticscontroller(res, req);
});

module.exports = router;
