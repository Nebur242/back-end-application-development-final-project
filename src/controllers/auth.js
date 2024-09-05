const services = require("../services/auth");
const { catchAsync } = require("../utils/catch-async");

const register = catchAsync((req, res) => {
  return services.register(req.body);
});

const login = catchAsync(async (req, res) => {
  const { username } = req.body;
  const token = await services.login(req.body);
  req.session.authorization = {
    token,
    username,
  };
  return { token };
});

module.exports = {
  register,
  login,
};
