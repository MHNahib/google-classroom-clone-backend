const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const { responce } = require("../services");

const loginconroller = async (res, req) => {
  //    check user exists or not
  let user = "";
  if (req.body.email) user = await User.findOne({ email: req.body.email });
  else user = await User.findOne({ uniqueId: req.body.uniqueId });
  if (!user) return responce(res, false, {}, 404, "User already exists.");

  // compare password
  let isValid;
  isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return responce(res, false, {}, 400, "Invalid password.");

  const token = user.generateAuthToken();

  console.log("token ", token);

  res.header("x-auth-token", token);
  responce(
    res,
    false,
    {
      name: user.name,
      email: user.email,
      uniqueId: user.uniqueId,
    },
    200,
    "Successful."
  );
};

module.exports = loginconroller;
