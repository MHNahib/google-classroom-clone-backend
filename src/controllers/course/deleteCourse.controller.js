const { responce } = require("../../services");
const { Course } = require("../../models/couse.model");

const deleteCourse = async (res, req, id) => {
  // console.log("ok");
  // find the course
  let course = await Course.findById(id);
  if (!course) return responce(res, false, {}, 404, "No course found.");

  // delete the course
  course = await Course.findByIdAndRemove(id);

  return responce(res, true, { course }, 200, "Successfully deleted.");
};

module.exports = deleteCourse;
