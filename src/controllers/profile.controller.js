const { User } = require("../models/user.model");
const { responce } = require("../services");
const getUser = async (res, req, id) => {
  // find all the courses offerd by the teachers

  try {
    const user = await User.findById(id);
    if (!user) return responce(res, false, {}, 404, "No course found.");
    responce(res, true, { user }, 200, "Successful.");
  } catch (error) {
    console.log(error);
    responce(res, true, {}, 500, "Internal server error.");
  }
};

module.exports = getUser;
