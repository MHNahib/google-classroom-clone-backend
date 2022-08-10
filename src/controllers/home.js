const { StatusCodes } = require("http-status-codes");

const { responce } = require("../services/");

const home = async (res, url) => {
  responce(
    res,
    true,
    { message: `Develped By M. H. Nahib` },
    StatusCodes.OK,
    "OK"
  );
};

module.exports = home;
