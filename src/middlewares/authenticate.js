const httpStatus = require("http-status");
const { ApiError } = require("../utils/api-error");
const { decodeToken } = require("../utils/jwt");
const { logger } = require("../config/logger");

const authenticate = (req, _res, next) => {
  try {
    let tokenHeader = req.headers.authorization;

    // check token integrity
    if (!tokenHeader || !tokenHeader.startsWith("Bearer")) {
      throw new Error("Unauthorized");
    }
    const token = tokenHeader.split(" ")[1];
    const user = decodeToken({ token });
    req.user = user;

    next();
  } catch (error) {
    logger.error(error);
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Not authorized to perform this action",
    );
  }
};

module.exports = authenticate;
