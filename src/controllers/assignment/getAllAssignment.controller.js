const { responce } = require("../../services/");
const { Assigment } = require("../../models/assignment.model");

const getAllAssignment = async (res, req) => {
  // find all the assignment offerd by the teachers

  try {
    const assignment = await Assigment.find({ couseId: req.body.couseId }).sort(
      "createdAt"
    );
    if (!assignment) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { assignment }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 404, "Internal server error.");
  }
};

module.exports = getAllAssignment;
