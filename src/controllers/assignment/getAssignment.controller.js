const { responce } = require("../../services/");
const { Assigment } = require("../../models/assignment.model");

const getAssignment = async (res, req, id) => {
  // find all the courses offerd by the teachers

  try {
    const assignment = await Assigment.findById(id);
    if (!assignment) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { assignment }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 404, "Internal server error.");
  }
};

module.exports = getAssignment;
