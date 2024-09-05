const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const errorsMiddleware = require("./middlewares/error.js");
const morgan = require("./config/morgan.js");
const { ApiError } = require("./utils/api-error.js");
const httpStatus = require("http-status");
const cors = require("cors");
const routesV1 = require("./routes");

function bootstrap(app) {
  const globalPrefix = "api";
  const defaultVersion = "v1";
  //Request logger
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);

  // set security HTTP headers
  app.use(helmet());
  app.use(cors());

  app.use(
    session({ secret: "fingerpint", resave: true, saveUninitialized: true })
  );
  app.use(express.json());

  app.use(`/${globalPrefix}/${defaultVersion}`, routesV1);

  // catch uncaugth routes
  app.use((_req, _res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Route Not found"));
  });

  // convert error to ApiError, if needed
  app.use(errorsMiddleware.errorConverter);

  // handle error
  app.use(errorsMiddleware.errorHandler);

  return app;
}

module.exports = { bootstrap };
