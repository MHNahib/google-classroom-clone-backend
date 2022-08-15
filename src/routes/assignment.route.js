const express = require("express");
const router = express.Router();
const { auth, isTeacher } = require("../middlewares");

const {
  getAllAssignment,
  createAssignment,
  getAssignment,
  updateAssignment,
  deleteAssignment,
} = require("../controllers");

router.get("/all", auth, async (req, res) => {
  getAllAssignment(res, req);
});
router.get("/:id", auth, async (req, res) => {
  getAssignment(res, req, req.params.id);
});
router.post("/create", auth, isTeacher, async (req, res) => {
  createAssignment(res, req);
});
router.put("/update/:id", auth, isTeacher, async (req, res) => {
  updateAssignment(res, req, req.params.id);
});
router.delete("/delete/:id", auth, isTeacher, async (req, res) => {
  deleteAssignment(res, req, req.params.id);
});

module.exports = router;
