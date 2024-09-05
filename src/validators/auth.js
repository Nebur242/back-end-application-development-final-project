const joi = require("joi");

const authBodyValidator = {
  body: joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required().min(6),
  }),
};

module.exports = {
  authBodyValidator,
};
