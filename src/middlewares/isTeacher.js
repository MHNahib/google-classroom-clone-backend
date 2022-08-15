const { responce } = require("../services");

const checkAdmin = (req, res, next) => {
  if (req.user.userType !== "teacher")
    return responce(res, false, {}, 403, "Request has been forbidden");
  next();
};

module.exports = checkAdmin;
