require("dotenv").config();
const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
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

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      userType: this.userType,
      uniqueId: this.uniqueId,
    },
    process.env.JWT_SECRET
  );
};

const User = new mongoose.model("User", userSchema);

// joi validation
const validation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    userType: Joi.string().max(7).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    gender: Joi.string().required(),
  });
  return schema.validate(body);
};

module.exports.userSchema = userSchema;
module.exports.User = User;
module.exports.validation = validation;
