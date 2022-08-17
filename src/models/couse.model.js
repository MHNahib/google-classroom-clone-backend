const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
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
      ref: "User",
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

// joi validation
const validation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    teachersId: Joi.objectId().required(),
  });
  return schema.validate(body);
};

module.exports.couseSchema = couseSchema;
module.exports.Course = Course;
module.exports.CourseValidation = validation;
