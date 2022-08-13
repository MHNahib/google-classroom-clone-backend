const mongoose = require("mongoose");
const enrolledSchema = new mongoose.Schema(
  {
    studentsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Enrolled = new mongoose.model("Enrolled", enrolledSchema);

module.exports.couseSchema = enrolledSchema;
module.exports.Enrolled = Enrolled;
