const express = require("express");
const router = express.Router();

const { singupconroller } = require("../controllers");

router.post("/", async (req, res) => {
  singupconroller(res, req);
});

module.exports = router;
