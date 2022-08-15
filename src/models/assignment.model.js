const mongoose = require("mongoose");
const assignmentSchema = new mongoose.Schema(
  {
    couseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    lastDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Assigment = new mongoose.model("Assigment", assignmentSchema);

module.exports.assignmentSchema = assignmentSchema;
module.exports.Assigment = Assigment;
