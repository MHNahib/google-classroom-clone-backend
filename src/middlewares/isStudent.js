const { responce } = require("../services");

const isStudent = (req, res, next) => {
  if (req.user.userType !== "student")
    return responce(res, false, {}, 403, "Request has been forbidden");
  next();
};

module.exports = isStudent;
