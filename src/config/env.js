const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const config = {
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
  auth: {
    saltRounds: parseInt(process.env.PASSWORD_SALTROUNDS, 10),
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

module.exports = config;
