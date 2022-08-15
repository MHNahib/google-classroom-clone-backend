const { responce } = require("../../services");
const { Assigment } = require("../../models/assignment.model");

const deleteAssignment = async (res, req, id) => {
  // console.log("ok");
  // find the Assigment
  let assignment = await Assigment.findById(id);
  if (!assignment) return responce(res, false, {}, 404, "No course found.");

  // delete the course
  assignment = await Assigment.findByIdAndRemove(id);

  if (!assignment) return responce(res, false, {}, 404, "No course found.");

  return responce(res, true, { assignment }, 200, "Successfully deleted.");
};

module.exports = deleteAssignment;
