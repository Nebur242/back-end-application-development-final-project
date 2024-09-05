const { logger } = require("../config/logger.js");

const unexpectedErrorHandler = (server) => (error) => {
  logger.error(error);
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

module.exports = { unexpectedErrorHandler };
