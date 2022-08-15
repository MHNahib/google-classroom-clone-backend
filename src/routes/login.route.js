const express = require("express");
const router = express.Router();

const { loginconroller } = require("../controllers");

router.post("/", async (req, res) => {
  loginconroller(res, req);
});

module.exports = router;
