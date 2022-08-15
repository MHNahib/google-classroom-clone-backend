const { responce } = require("../../services");
const { Course } = require("../../models/couse.model");

const updateCourse = async (res, req, id) => {
  // console.log("ok");
  // find the course
  const course = await Course.findById(id);
  if (!course) return responce(res, false, {}, 404, "No course found.");

  // update the course
  Course.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name },
    function (err, result) {
      if (err) {
        return responce(res, false, {}, 400, "Bad request.");
      } else {
        return responce(res, true, { result }, 200, "Successfully updated.");
      }
    }
  );
};

module.exports = updateCourse;
