const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares");

const {
  getAllCourse,
  createNewCourse,
  updateCourse,
  deleteCourse,
  getCourse,
} = require("../controllers");

router.get("/all", auth, async (req, res) => {
  getAllCourse(res, req);
});
router.get("/:id", auth, async (req, res) => {
  getCourse(res, req, req.params.id);
});
router.post("/create", auth, async (req, res) => {
  createNewCourse(res, req);
});
router.put("/update/:id", auth, async (req, res) => {
  updateCourse(res, req, req.params.id);
});
router.delete("/delete/:id", auth, async (req, res) => {
  deleteCourse(res, req, req.params.id);
});

module.exports = router;
