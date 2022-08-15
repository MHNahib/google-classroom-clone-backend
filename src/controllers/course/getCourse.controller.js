const { responce } = require("../../services/");
const { Course } = require("../../models/couse.model");

const getCourse = async (res, req, id) => {
  // find all the courses offerd by the teachers

  try {
    const courses = await Course.findById(id);
    if (!courses) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { courses }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 404, "Internal server error.");
  }
};

module.exports = getCourse;
