const { responce } = require("../../services/");
const { Submission } = require("../../models/submission.model");

const getAllAssignmentByIdController = async (res, req, id) => {
  try {
    const submission = await Submission.find({
      assignmentId: id,
      submittedBy: req.user._id,
    })
      .populate("submittedBy")
      .sort("createdAt");
    if (!submission) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { submission }, 200, "Successful.");
  } catch (error) {
    responce(res, true, {}, 404, "Internal server error.");
  }
};

module.exports = getAllAssignmentByIdController;
