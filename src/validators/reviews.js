const joi = require("joi");

const createReviewValidator = {
  body: joi.object().keys({
    bookId: joi.number().required(),
    text: joi.string().required(),
  }),
};

const updateReviewValidator = {
  body: joi.object().keys({
    text: joi.string().required(),
  }),
  params: joi.object().keys({
    id: joi.string().required(),
  }),
};

module.exports = {
  createReviewValidator,
  updateReviewValidator,
};
