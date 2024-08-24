import express from "express";
import session from "express-session";
import helmet from "helmet";
import errorsMiddleware from "./middlewares/error.js";
import morgan from "./config/morgan.js";
import { ApiError } from "./utils/api-error.js";
import httpStatus from "http-status";
import cors from "cors";

function bootstrap(app) {
  const globalPrefix = "/api";
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

export { bootstrap };
