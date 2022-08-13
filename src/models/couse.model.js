const mongoose = require("mongoose");
const couseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    teachersId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    students: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = new mongoose.model("Course", couseSchema);

module.exports.couseSchema = couseSchema;
module.exports.Course = Course;
