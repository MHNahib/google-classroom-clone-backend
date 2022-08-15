const { responce } = require("../../services/");
const { Course } = require("../../models/couse.model");

const getAllCourse = async (res, req) => {
  // find all the courses offerd by the teachers

  try {
    const courses = await Course.find().sort("name");
    if (!courses) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { courses }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 404, "Internal server error.");
  }
};

module.exports = getAllCourse;
