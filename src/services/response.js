const express = require("express");

const response = (res, isSuccess, data, code, message) => {
  res.status(code).send({
    isSuccess,
    code,
    data,
    message,
  });
};

module.exports = response;
