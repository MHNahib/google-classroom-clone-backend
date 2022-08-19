const { responce } = require("../../services/");
const { Course } = require("../../models/couse.model");

const getCourseByTeacherId = async (res, req, id) => {
  // find all the courses offerd by the teachers

  try {
    const courses = await Course.find({ teachersId: id }).populate(
      "teachersId"
    );
    if (!courses) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { courses }, 200, "Successful.");
  } catch (error) {
    console.log(error);
    responce(res, true, {}, 500, "Internal server error.");
  }
};

module.exports = getCourseByTeacherId;
