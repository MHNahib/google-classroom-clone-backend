const { responce } = require("../../services");
const { Course } = require("../../models/couse.model");

const createNewCourse = async (res, req) => {
  //   console.log(req.user);

  // create a new coruse
  try {
    course = new Course({
      name: req.body.name,
      teachersId: req.user._id,
    });
    await course.save();
    responce(res, true, { course }, 201, "Successfuly created new course.");
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 500, "Internal server error.");
  }
};

module.exports = createNewCourse;
