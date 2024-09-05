const config = require("../config/env");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function decodeToken({ token }) {
  return jwt.verify(token, config.jwt.secret);
}

function generateToken({ id, username }) {
  return jwt.sign({ id, username }, config.jwt.secret);
}

function hashPassword(password) {
  return bcrypt.hash(password, config.auth.saltRounds);
}

function comparePasswords(passwordInput, storedHashedPassword) {
  return bcrypt.compare(passwordInput, storedHashedPassword);
}

module.exports = {
  decodeToken,
  generateToken,
  hashPassword,
  comparePasswords,
};
