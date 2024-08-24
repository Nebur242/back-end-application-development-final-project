import { bootstrap } from "./app.js";
import config from "./config/env.js";
import { logger } from "./config/logger.js";
import { unexpectedErrorHandler } from "./utils/functions.js";

async function start() {
  let server;
  try {
    const express = await import("express");
    const app = bootstrap(express.default());
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
    const errorHandler = unexpectedErrorHandler(server);
    process.on("uncaughtException", errorHandler);
    process.on("unhandledRejection", errorHandler);
    process.on("SIGTERM", errorHandler);
  } catch (error) {
    errorHandler(error);
  }
}

start();
