const { responce } = require("../../services/");
const { Enrolled } = require("../../models/enrolled.model");

const getAllEnrolledCourse = async (res, req) => {
  let enrolled;
  try {
    const enrolled = await Enrolled.find({ studentsId: req.user._id }).populate(
      "courseId"
    );

    console.log(enrolled);
    if (!enrolled) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { enrolled }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 500, "Internal server error.");
  }
};

module.exports = getAllEnrolledCourse;
