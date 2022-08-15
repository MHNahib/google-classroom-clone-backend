const { responce } = require("../../services");
const { Enrolled } = require("../../models/enrolled.model");

const enrollToTheCourse = async (res, req) => {
  let enroll;
  try {
    enroll = new Enrolled({
      studentsId: req.user._id,
      courseId: req.body.courseId,
    });
    await enroll.save();
    responce(res, true, { enroll }, 201, "Successfuly created new course.");
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 500, "Internal server error.");
  }
};

module.exports = enrollToTheCourse;
