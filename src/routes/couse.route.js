const express = require("express");
const router = express.Router();
const { auth, isTeacher } = require("../middlewares");

const {
  getAllCourse,
  createNewCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  getCourseByTeacherId,
} = require("../controllers");

router.get("/all", auth, async (req, res) => {
  getAllCourse(res, req);
});
router.get("/teacher/:id", auth, isTeacher, async (req, res) => {
  getCourseByTeacherId(res, req, req.params.id);
});
router.get("/:id", auth, async (req, res) => {
  getCourse(res, req, req.params.id);
});
router.post("/create", auth, isTeacher, async (req, res) => {
  createNewCourse(res, req);
});
router.put("/update/:id", auth, isTeacher, async (req, res) => {
  updateCourse(res, req, req.params.id);
});
router.delete("/delete/:id", auth, isTeacher, async (req, res) => {
  deleteCourse(res, req, req.params.id);
});

module.exports = router;
