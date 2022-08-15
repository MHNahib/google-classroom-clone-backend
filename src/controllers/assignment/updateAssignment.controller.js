const { responce } = require("../../services");
const { Assigment } = require("../../models/assignment.model");

const updateAssignment = async (res, req, id) => {
  // console.log("ok");
  // find the course
  const assignment = await Assigment.findById(id);
  if (!assignment) return responce(res, false, {}, 404, "No course found.");

  // update the course
  Assigment.findByIdAndUpdate(
    { _id: id },
    {
      couseId: req.body.couseId,
      title: req.body.title,
      description: req.body.description,
      lastDate: req.body.lastDate,
    },
    (err, result) => {
      if (err) {
        return responce(res, false, {}, 400, "Bad request.");
      } else {
        return responce(res, true, { result }, 200, "Successfully updated.");
      }
    }
  );
};

module.exports = updateAssignment;
