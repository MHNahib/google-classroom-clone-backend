const express = require("express");
const router = express.Router();

const { home } = require("../controllers");

router.get("/", async (req, res) => {
  home(res, "");
});

module.exports = router;
