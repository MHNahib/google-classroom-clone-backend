const jwt = require("jsonwebtoken");
require("dotenv").config();
const { responce } = require("../services/");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return responce(res, false, {}, 401, "Acess denied. No token found");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return responce(res, false, {}, 400, "Invalid token.");
  }
};

module.exports = auth;
