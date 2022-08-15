const { responce } = require("../../services");
const { Assigment } = require("../../models/assignment.model");

const createAssignment = async (res, req) => {
  // create a new coruse
  try {
    assignment = new Assigment({
      couseId: req.body.couseId,
      title: req.body.title,
      description: req.body.description,
      lastDate: req.body.lastDate,
    });
    await assignment.save();
    responce(res, true, { assignment }, 201, "Successfuly created new course.");
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 500, "Internal server error.");
  }
};

module.exports = createAssignment;
