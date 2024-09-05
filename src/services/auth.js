const httpStatus = require("http-status");
const user = require("../models/user");
const { ApiError } = require("../utils/api-error");
const {
  hashPassword,
  comparePasswords,
  generateToken,
} = require("../utils/jwt");

const register = async ({ username, password }) => {
  const foundUser = await user.findOne({ where: { username } });

  if (foundUser) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `User with : ${username} already exists`
    );
  }

  // hashing the password
  const hashedPassword = await hashPassword(password);

  // execute the registration
  const finalUser = await user.create({
    username: username,
    password: hashedPassword,
  });

  return finalUser;
};

const login = async ({ username, password }) => {
  // check if user registered or not
  const found = await user.findOne({ where: { username } });

  if (!found)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `User with username: ${username} not exists`
    );

  // check password matching
  const isMatched = await comparePasswords(password, found.password);

  if (!isMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Incorrect credentials");
  }

  // create token
  return generateToken({
    id: found.id,
    username: found.username,
  });
};

module.exports = {
  register,
  login,
};
