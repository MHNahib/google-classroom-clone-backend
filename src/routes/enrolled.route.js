const express = require("express");
const router = express.Router();
const { auth, isStudent } = require("../middlewares");

const { getAllEnrolledCourse, enrollToTheCourse } = require("../controllers");

router.get("/all", auth, isStudent, async (req, res) => {
  getAllEnrolledCourse(res, req);
});

router.post("/create", auth, isStudent, async (req, res) => {
  enrollToTheCourse(res, req);
});

module.exports = router;
