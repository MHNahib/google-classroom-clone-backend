const mongoose = require("mongoose");
const Joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    userType: {
      type: String,
      requried: true,
      maxlength: 7,
    },
    email: {
      type: String,
      unique: true,
      requried: true,
    },
    password: {
      type: String,
      required: true,
    },
    uniqueId: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);

// joi validation
const validation = (body) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    userType: Joi.string().max(7).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return schema.validate(body);
};

module.exports.userSchema = userSchema;
module.exports.User = User;
module.exports.validation = validation;
