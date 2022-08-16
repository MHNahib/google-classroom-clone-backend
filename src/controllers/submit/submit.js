const { responce } = require("../../services");
const { Submission } = require("../../models/submission.model");
const { Assigment } = require("../../models/assignment.model");

const submitController = async (res, req, id) => {
  let submit;
  const assignment = await Assigment.findById(id);
  if (!assignment) return responce(res, false, {}, 404, "No course found.");
  console.log(assignment);

  try {
    submit = new Submission({
      submittedBy: req.user._id,
      assignmentId: id,
      crossedDeadLine: false,
      file: req.file.path,
    });
    await submit.save();
    responce(res, true, { submit }, 201, "Successfuly created new course.");
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 500, "Internal server error.");
  }
};

module.exports = submitController;
