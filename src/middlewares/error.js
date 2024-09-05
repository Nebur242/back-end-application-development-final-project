const config = require("../config/env.js");
const { ApiError } = require("../utils/api-error.js");
const httpStatus = require("http-status");
const { logger } = require("../config/logger.js");

const errorConverter = (err, _req, _res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, `${message}`, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, _req, res, _next) => {
  let { statusCode = 500, message = "Server Error" } = err;

  if (config.env === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = `${httpStatus[httpStatus.INTERNAL_SERVER_ERROR]}`;
  }

  res.locals.errorMessage = err.message;

  const response = {
    statusCode,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  if (config.env === "development") {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
