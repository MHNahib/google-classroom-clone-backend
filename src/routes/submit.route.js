const express = require("express");
const router = express.Router();
const { auth, isStudent, upload } = require("../middlewares");

const {
  submitController,
  getAllAssignmentByIdController,
} = require("../controllers");

router.post(
  "/:id",
  auth,
  isStudent,
  upload.single("file"),
  async (req, res) => {
    submitController(res, req, req.params.id);
  }
);

router.get("/:id", auth, isStudent, async (req, res) => {
  getAllAssignmentByIdController(res, req, req.params.id);
});

module.exports = router;
