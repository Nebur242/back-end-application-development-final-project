const { bootstrap } = require("./app.js");
const sequelize = require("./config/database.js");
const config = require("./config/env.js");
const { logger } = require("./config/logger.js");
const { unexpectedErrorHandler } = require("./utils/functions.js");

async function start() {
  let server;
  try {
    const express = await import("express");
    const app = bootstrap(express.default());
    await sequelize.sync();
    logger.info("All models were synchronized successfully.");
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
