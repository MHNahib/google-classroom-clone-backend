const bcrypt = require("bcrypt");

const { validation, User } = require("../models/user.model");
const { responce } = require("../services");

const singupconroller = async (res, req) => {
  // check req.body is valid or not
  const { error } = validation(req.body);
  if (error) {
    return responce(res, false, {}, 400, error.details[0].message);
  }

  //    check user exists or not
  let user = await User.findOne({ email: req.body.email });
  if (user) return responce(res, false, {}, 400, "User already exists.");
  console.log(user);

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  // generate random user id
  let randomNumber = Math.floor(1000 + Math.random() * 9000);
  let uniqueId;
  if (req.body.userType === "teacher") uniqueId = `T-${randomNumber}`;
  else uniqueId = `S-${randomNumber}`;

  try {
    user = new User({
      name: req.body.name,
      userType: req.body.userType,
      email: req.body.email,
      password: hash,
      uniqueId: uniqueId,
      gender: req.body.gender,
    });
    await user.save();
    responce(res, true, {}, 201, "Sign up successful.");
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 500, "Internal server error.");
  }
};

module.exports = singupconroller;
